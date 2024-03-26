import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Diagrams } from "@/components";

export default function DiagramsCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Diagrams />
      </CardContent>
    </Card>
  );
}
