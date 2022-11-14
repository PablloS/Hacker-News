import SingleNews from "./singleNews";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { newsLoad } from "../redux/actions";
import { Link } from "react-router-dom";
import { Avatar, List } from "antd";

function News(props) {

    const dispatch = useDispatch(); 

    const news = useSelector(state => {
        const {newsReducer} = state;
        return newsReducer.news; 
    })

    useEffect(() => {
        dispatch(newsLoad());
    }, [])

    return (
        <div className="news">
            <List
                itemLayout="vertical"
                size="large"
                header="News"
                pagination={{
                    pageSize: 10,
                }}
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