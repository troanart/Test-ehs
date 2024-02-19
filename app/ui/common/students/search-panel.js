"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import api from '@/app/utils/api';

export default function SearchPanel() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Пошук Студента " />
      )}
    />
  );
}
