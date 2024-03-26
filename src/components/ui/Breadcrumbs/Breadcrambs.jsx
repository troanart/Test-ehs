import React from "react";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split().filter((path) => path);
  return (
    <BreadcrumbComponent>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {pathNames.map((segment, index) => (
        <Breadcrumb.Item key={index}>{segment}</Breadcrumb.Item>
      ))}
    </BreadcrumbComponent>
  );
};

export default Breadcrumbs;
