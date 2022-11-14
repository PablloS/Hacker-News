import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storyLoad } from "../redux/actions";
import Comment from "./comment";
import { List } from "antd";
import 'antd/dist/antd.css';



function Story(props) {

    const dispatch = useDispatch();
    const {id} = useParams();

    const storyData = useSelector((state) => state.storyReducer.story);

    const comments = useSelector((state) => state.commentsReducer.comments);

    useEffect(() => {
        dispatch(storyLoad(id));
    }, [id])



    return (
        <div className="story">
            <Link to="/">Main page</Link>
            <a href={storyData.url}>Ссылка на новость</a>
            <h1>{storyData.title}</h1>
            <p>{storyData.date}</p>
            <p>{storyData.nick}</p>
            <p>{storyData.commentsId}</p>
            <List 
                className="comment-list"
                header={`${comments.length} comments`} 
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={res => (
                    <li>
                        <Comment key={res.id} data={res} />
                    </li>
                )}
            />
            {/* {comments.map(res => {
                return  <Comment key={res.id} data={res} />
            })} */}
        </div>
        
    )
}

export default Story;