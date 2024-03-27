import React from "react";

import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const paths = usePathname();
  console.log(paths);
  const pathNames = paths.split().filter((path) => path);
  console.log(pathNames);
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">{pathNames}</Breadcrumb.Item>
      {/* {pathNames.map((segment, index) => (
        <Breadcrumb.Item key={index}>{segment}</Breadcrumb.Item>
      ))} */}
    </Breadcrumb>
  );
}
