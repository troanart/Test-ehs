import React from "react";

import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const paths = usePathname();
  const pathNames = paths.split().filter((path) => path);
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">{pathNames}</Breadcrumb.Item>
      {/* {pathNames.map((segment, index) => (
        <Breadcrumb.Item key={index}>{segment}</Breadcrumb.Item>
      ))} */}
    </Breadcrumb>
  );
}
