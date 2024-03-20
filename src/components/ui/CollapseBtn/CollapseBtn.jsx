import React from "react";
import { Button } from "@mui/material";

export default function CollapseBtn({ onClick }) {
  return (
    <Button onClick={onClick} variant="text" className="text-xs">
      Згорнути
    </Button>
  );
}
