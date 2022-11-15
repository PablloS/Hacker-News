import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsLoad, storyLoad, updateNumbersOfComments } from "../redux/actions";
import Comment from "./comment";
import { List, Button } from "antd";
import 'antd/dist/antd.css';
import { UndoOutlined } from "@ant-design/icons";


function Story(props) {

    const dispatch = useDispatch();
    const {id} = useParams();

    const storyData = useSelector((state) => state.storyReducer.story);
    const numberOfComments = useSelector((state) => state.storyReducer.numberOfComments);
    const comments = useSelector((state) => state.commentsReducer.comments);

    const updateComments = async () => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                            .then(response => response.json());

        if (response.kids !== undefined) {
            dispatch(commentsLoad(response.kids));
            dispatch(updateNumbersOfComments(id));
        }
        
    }

    useEffect(() => {
        dispatch(storyLoad(id));
    }, [id])

    return (
        <div className="story">
            <Link to="/">Main page</Link>
            <h1>{storyData.title}</h1>
            <p>{storyData.time !=null && new Date(storyData.time*1000).toJSON().slice(0,10).replace(/-/g,'/')}</p>
            <p>{`Posted by ${storyData.by}`}</p>
            <a href={storyData.url}>Link to news</a>
            <List 
                className="comment-list"
                header={
                    <div>
                        <p>{numberOfComments} comments</p>
                        <Button type="primary" shape="round" icon={<UndoOutlined />} onClick={updateComments}>update comments</Button>
                    </div>
                } 
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={res => (
                    <li>
                        <Comment key={res.id} data={res} />
                    </li>
                )}
            />
        </div>
        
    )
}

export default Story;