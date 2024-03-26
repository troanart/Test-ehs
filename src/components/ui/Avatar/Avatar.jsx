import React from "react";
import { Avatar as AvatarComponent, Space,Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: <button>Змінити користувача</button>,
  },
  {
    key: "2",
    label: <button>Вихід</button>,
  },
];
const Avatar = () => (
  <>
    <Dropdown 
      
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow>
      <Space>
        <AvatarComponent className="cursor-pointer">Admin</AvatarComponent>
      </Space>
    </Dropdown>
  </>
);
export default Avatar;
