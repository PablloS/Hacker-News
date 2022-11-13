

function SingleNews({data}) {

    const {title, rating, nick, date, id} = data; 

    return (
        <div className="news-item">
            <p>{title}</p>
            <p>{rating}</p>
            <p>{nick}</p>
            <p>{date}</p>
        </div>
    )
}

export default SingleNews; 