"use client";

import React from "react";
import { Layout, theme } from "antd";
import { Avatar, Breadcrambs, AccountMenu } from "@/components";
import { Divider } from "antd";
const { Header: HeaderComponents } = Layout;

export default function Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <HeaderComponents
      className=""
      style={{
        padding: 0,
        background: colorBgContainer,
      }}>
      <div className="mx-4 flex items-center ">
        <div className="mr-auto ">
          <Breadcrambs />
        </div>
        <Avatar />
        <div>
          <Divider type="vertical" className="bg-gray-300 h-[25px]" />
        </div>
        <AccountMenu />
      </div>
    </HeaderComponents>
  );
}
