"use client";

import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchPanel({ students, onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event, newValue) => {
    setSearchValue(newValue);
    onSearch(newValue); // Вызываем функцию обратного вызова с новым значением поиска
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      sx={{ width: 300 }}
      options={students.map((student) => student.name)} // Опции для автозаполнения - имена студентов
      renderInput={(params) => (
        <TextField
          {...params}
          label="Поиск студента"
          value={searchValue}
          onChange={handleSearchChange}
        />
      )}
    />
  );
}
