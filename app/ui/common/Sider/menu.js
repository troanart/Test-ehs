"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";

const menuItems = [
  {
    title: "Головна",
    icon: <HomeOutlinedIcon style={{ color: "white" }} />,
    path: "/admin",
  },
  {
    title: "Групи",
    icon: <GroupOutlinedIcon style={{ color: "white" }} />,
    path: "/admin/groups",
  },
  {
    title: "Студенти",
    icon: <PersonOutlineOutlinedIcon style={{ color: "white" }} />,
    path: "/admin/students",
  },
  {
    title: "Викладачі",
    icon: <ImportContactsOutlinedIcon style={{ color: "white" }} />,
    path: "/admin/teachers",
  },
  {
    title: "Календар",
    icon: <CalendarTodayOutlinedIcon style={{ color: "white" }} />,
    path: "/admin/calendar",
  },
  {
    title: "Статистика",
    icon: <QueryStatsOutlinedIcon style={{ color: "white" }} />,
    path: "/admin/stats",
  },
];

export default function MenuComponent() {
  return (
    <Box
      sx={{
        bgcolor: "ineright",
        marginTop: "50%",
      }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {menuItems.map((item) => (
            <ListItem
              className="text-white"
              sx={{
                transition:
                  "background-color ease-in 0.27s, border-radius ease-in 0.27s",
                "&:active": {
                  backgroundColor: "#1677ff",
                  borderRadius: "16px",
                },
                "&:hover": {
                  backgroundColor: "#1677ff",
                  borderRadius: "16px",
                },
                "&:focus": {
                  backgroundColor: "#1677ff",
                  borderRadius: "16px",
                },
                "&:target": {
                  bgcolor: "#1677ff",
                  borderRadius: "8px",
                },
              }}
              key={item.title}
              disablePadding>
              <ListItemButton component="a" href={item.path}>
                <ListItemIcon className="ml-3">{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
