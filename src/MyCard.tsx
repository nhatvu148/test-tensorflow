import * as React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const MyCard = (props: any) => {
    const { name, job, avatar, image } = props;
    const { Meta } = Card;
    return (
        <Card
            style={{ width: '100%' }}
            cover={<img alt="example" src={image && image.urls.raw} />}
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta avatar={<Avatar src={avatar} />} title={name} description={job} />
        </Card>
    );
};

export default MyCard;
