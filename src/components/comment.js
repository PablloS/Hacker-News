import { Comment as AntComment, Tooltip } from "antd";
import 'antd/dist/antd.css';

function Comment({data}) {

    const {nick, date, id, text, kids} = data;

    return (
        <AntComment author={nick} content={text} datetime={date} />
    )
}

export default Comment;