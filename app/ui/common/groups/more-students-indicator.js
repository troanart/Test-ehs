import * as React from "react";
import Button from "@mui/material/Button";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function MoreStudentsIndicator({ onClick }) {
  return (
    <Button
      className="border-0 outline-0 hover:border-0 "
      variant="outlined"
      onClick={onClick}>
      <MoreHorizIcon />
    </Button>
  );
}
