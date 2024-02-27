"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  FormControlLabel,
} from "@mui/material";

export default function AddGroupsForm() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupType, setGroupType] = useState("offline");
  const [formErrors, setFormErrors] = useState({});

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

  const validateForm = () => {
    const errors = {};
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (!groupName.trim()) {
      errors.groupName = "Назва групи обов'язкова";
    } else if (specialChars.test(groupName)) {
      errors.groupName = "Тільки латиниця і цифри";
    }
    if (!selectedTeacher) {
      errors.selectedTeacher = "Вибір викладача обов'язковий";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // отправить данные формы
      console.log("Form is valid. Submitting...");
    } else {
      console.log("Form is invalid. Please correct errors.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <FormControl className="mb-4">
        <TextField
          required
          id="outlined-required"
          label="Назва"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          error={!!formErrors.groupName}
          helperText={formErrors.groupName}
        />
      </FormControl>
      <FormControl className="mb-4 ">
        <FormLabel id="demo-radio-buttons-group-label">Тип групи *</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="offline"
          name="radio-buttons-group"
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}>
          <FormControlLabel value="online" control={<Radio />} label="Online" />
          <FormControlLabel
            value="offline"
            control={<Radio />}
            label="Offline"
          />
        </RadioGroup>
      </FormControl>
      <FormControl className="mb-4">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedTeacher}
          onChange={(e) => setSelectedTeacher(e.target.value)}
          error={!!formErrors.selectedTeacher}
          displayEmpty>
          <MenuItem disabled value="">
            <em>Виберіть викладача *</em>
          </MenuItem>
          {teachers.map((teacher) => (
            <MenuItem key={teacher.id} value={teacher.name}>
              {teacher.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="outlined" type="submit">
        Створити групу
      </Button>
    </form>
  );
}
