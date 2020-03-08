import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

const MyCard = ({ name, job, avatar, image }) => {
  const { Meta } = Card;
  return (
    <Card
      style={{ width: 350 }}
      cover={<img alt="example" src={image} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <Meta avatar={<Avatar src={avatar} />} title={name} description={job} />
    </Card>
  );
};

export default MyCard;
