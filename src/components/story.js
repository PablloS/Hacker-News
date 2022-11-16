import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentsLoad, loaderOff, loaderOn, storyLoad, updateNumbersOfComments } from "../redux/actions";
import Comment from "./comment";
import { List, Button, PageHeader } from "antd";
import 'antd/dist/antd.css';
import { UndoOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";


function Story(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    const storyData = useSelector((state) => state.storyReducer.story);
    const numberOfComments = useSelector((state) => state.storyReducer.numberOfComments);
    const comments = useSelector((state) => state.commentsReducer.comments);
    const spinner = useSelector((state) => state.appReducer.loading)

    const updateComments = async () => {
        dispatch(loaderOn());
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                            .then(response => response.json());

        if (response.kids !== undefined) {
            dispatch(commentsLoad(response.kids));
            dispatch(updateNumbersOfComments(id));
        }

        dispatch(loaderOff());
    }

    useEffect(() => {
        dispatch(storyLoad(id));
    }, [id])

    return (
        <div className="story">
            <PageHeader
                onBack={() => history.push('/')}
                className="site-page-header"
                title="Hacker News"
            ></PageHeader>
            
            <h1>{storyData.title}</h1>
            <p>{storyData.time !=null && new Date(storyData.time*1000).toJSON().slice(0,10).replace(/-/g,'/')}</p>
            <p>{`Posted by ${storyData.by}`}</p>
            <a href={storyData.url}>Link to news</a>
            <List 
                className="comment-list"
                loading = {spinner}
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