import SingleNews from "./singleNews";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { newsLoad } from "../redux/actions";
import { Link } from "react-router-dom";

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
            {news.map(res => (
                <Link key={res.id} to={`/stories/${res.id}`} >
                    <SingleNews  data={res} />
                </Link>
            ))}
        </div>
    )
}

export default News;