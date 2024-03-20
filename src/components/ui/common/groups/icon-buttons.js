import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="edit" color="primary">
        <Edit />
      </IconButton>
      <IconButton aria-label="delete" color="primary">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
}
