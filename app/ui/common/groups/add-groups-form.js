import {
  Box,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import React, { useEffect } from "react";

export default function AddGroupsForm() {
  const [teachers, setTeachers] = React.useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data/teachers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setTeachers(responseData);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setTeachers(event.target.value);
  };
  return (
    <form method="post">
      <FormControl>
        <InputLabel htmlFor="component-filled">Назва групи</InputLabel>
        <FilledInput id="component-filled" />
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Тип групи</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group">
          <FormControlLabel value="online" control={<Radio />} label="Online" />
          <FormControlLabel value="ofline" control={<Radio />} label="Ofline" />
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Викладач</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={teachers}
          label="Викладач"
          onChange={handleChange}>
          {teachers.length > 0 &&
            teachers.map((teacher) => {
              return (
                <MenuItem key={teacher.id} value={teacher.name}>
                  {teacher.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </form>
  );
}
