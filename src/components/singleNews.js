import { Avatar, List, Space } from "antd";
import { StarOutlined} from '@ant-design/icons';
import React from 'react';

function SingleNews({data}) {

    const {title, rating, nick, date, id} = data; 

    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
    );

    return (
        <List.Item
            actions={[
                <IconText icon={StarOutlined} text={rating} key="list-vertical-star-o" />,
            ]}>
            <List.Item.Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                title={title}
                description={`${new Date(date*1000).toJSON().slice(0,10).replace(/-/g,'/')} by ${nick} `}
            />
            
        </List.Item>
        // <div className="news-item">
        //     <p>{title}</p>
        //     <p>{rating}</p>
        //     <p>{nick}</p>
        //     <p>{date}</p>
        // </div>
    )
}

export default SingleNews; 