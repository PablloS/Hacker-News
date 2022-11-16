import { Comment as AntComment, Avatar} from "antd";
import 'antd/dist/antd.css';
import { useState } from "react";
import { CaretDownOutlined} from '@ant-design/icons';

function Comment({data}) {

    const {by, time, id, text, kids} = data;
    const [childComments, setChildComments] = useState([]);
    const [openChildCommentsFlag, setOpenChildCommentsFlag] = useState(false);


    const handleClick = () => {
        if (kids !== undefined) {

            const promiseArr = [];

            for (let i = 0; i < kids.length; i++) {
                promiseArr.push(
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json?print=pretty`)
                        .then(response => response.json()));
            }
    
            Promise.all(promiseArr).then( values => {
                setChildComments(values)
            })
        }

        setOpenChildCommentsFlag(true);
    }

    return (
            <div onClick={handleClick} className="comment-component-div">
                <AntComment 
                    author={by} 
                    content={text} 
                    avatar = {<Avatar src='https://joeschmoe.io/api/v1/random' />}
                    datetime={time !=null && new Date(time*1000).toJSON().slice(0,10).replace(/-/g,'/')} 
                >
                    {childComments.map( res => (
                        <Comment key={res.id} data={res}/>
                    ))}
                    <p>{(kids != undefined && !openChildCommentsFlag) && <CaretDownOutlined />}</p>
                </AntComment>
            </div>
    )
}

export default Comment;