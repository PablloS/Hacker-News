
function Comment({data}) {

    const {nick, date, id, text, kids} = data;

    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

export default Comment;