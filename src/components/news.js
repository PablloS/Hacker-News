import SingleNews from "./singleNews";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { newsLoad } from "../redux/actions";
import { Link } from "react-router-dom";
import { List, Button, PageHeader } from "antd";
import { UndoOutlined } from "@ant-design/icons";

function News(props) {

    const dispatch = useDispatch(); 

    const news = useSelector((state) => state.newsReducer.news);
    const spinner = useSelector((state) => state.appReducer.loading)

    useEffect(() => {

        if (!news.length) {
            dispatch(newsLoad());
        }

        const timer = setInterval(updateNews, 60000);

        return function clearTimer() {
            clearInterval(timer); 
        }
    }, [])

    const updateNews = () => {
        dispatch(newsLoad());
    }


    return (
        <div className="news">
            <PageHeader
                className="site-page-header"
                title="Hacker News"
                extra={[
                    <Button key="header-button1" type="primary" shape="round" icon={<UndoOutlined />} onClick={updateNews}>update news</Button>
                ]}
            ></PageHeader>
            
            <List
                itemLayout="vertical"
                size="large"
                header="Last 100 news"
                pagination={{}}
                loading={spinner}
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