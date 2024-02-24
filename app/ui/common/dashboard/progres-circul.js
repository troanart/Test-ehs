import React from "react";
import { Flex, Progress } from "antd";
import { Card, CardContent } from "@mui/material";
const ProgressCircul = () => (
  <Card>
    <CardContent>
      <Flex gap="small" wrap="wrap">
        <Progress type="dashboard" percent={75} size={80} />
      </Flex>
      <div>
        <h3>Ціль на місяць</h3>
      </div>
    </CardContent>
  </Card>
);
export default ProgressCircul;
