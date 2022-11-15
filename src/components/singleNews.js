import { Avatar, List, Space } from "antd";
import { StarOutlined} from '@ant-design/icons';
import React from 'react';

function SingleNews({data}) {

    const {title, score, by, time, id} = data; 

    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
    );

    return (
        <List.Item
            actions={[
                <IconText icon={StarOutlined} text={score} key="list-vertical-star-o" />,
            ]}>
            <List.Item.Meta
                avatar={<Avatar src='https://m.media-amazon.com/images/I/31tz9upV1FL.png' />}
                title={title}
                description={`${new Date(time*1000).toJSON().slice(0,10).replace(/-/g,'/')} by ${by} `}
            />
        </List.Item>
    )
}

export default SingleNews; 