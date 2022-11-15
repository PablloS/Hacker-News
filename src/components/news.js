import SingleNews from "./singleNews";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { newsLoad } from "../redux/actions";
import { Link } from "react-router-dom";
import { Avatar, List, Button } from "antd";
import { UndoOutlined } from "@ant-design/icons";

function News(props) {

    const dispatch = useDispatch(); 

    const news = useSelector((state) => state.newsReducer.news);

    useEffect(() => {
        dispatch(newsLoad());
        const timer = setInterval(updateNews, 60000);
    }, [])

    const updateNews = () => {
        dispatch(newsLoad());
    }


    return (
        <div className="news">
            <List
                itemLayout="vertical"
                size="large"
                header={
                    <div>
                        <p>News </p>
                        <Button type="primary" shape="round" icon={<UndoOutlined />} onClick={updateNews}>update news</Button>
                    </div>
                }
                pagination={{}}
                loading = {!news.length}
                dataSource={news}
                renderItem={(item) => (
                    <Link key={item.id} to={`/stories/${item.id}`} >
                        <SingleNews  data={item} />
                    </Link>
                )}
            />
            
        </div>
    )
}

export default News;