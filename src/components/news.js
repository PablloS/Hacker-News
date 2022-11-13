import SingleNews from "./singleNews";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { newsLoad } from "../redux/actions";

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
            {news.length && news.map(res => {
                return <SingleNews key={res.id} data={res} />
            })}
        </div>
    )
}

export default News;