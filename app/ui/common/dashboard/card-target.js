"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import cn from "classnames";

export default function BasicCard() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data/groups");
        if (!response.ok) {
          throw new Error("Шось пішло не так");
        }
        const responseData = await response.json();
        setGroups(responseData);
      } catch (error) {
        console.log("There was a problem fetching the data:", error);
      }
    };
    fetchData();
  }, []);

  const data = [
    {
      title: "Загальний прибуток:",
      value: new Intl.NumberFormat("uk", { notation: "compact" }).format(
        groups.reduce((sum, group) => sum + (group.income || 0), 0) || 0
      ),
      description: "Загальний прибуток з урахуванням заробітної плати вчителів",
    },
    {
      title: "Чистий прибуток:",
      value: new Intl.NumberFormat("uk", { notation: "compact" }).format(
        groups.reduce((sum, group) => sum + (group.cleareIncome || 0), 0) || 0
      ),
      description:
        "Загальний прибуток з вирахуванням заробітної плати вчителів",
    },
  ];

  return (
    <Box
      sx={{
        // maxWidth: 160 + "px",
        bgcolor: "background.paper",
      }}>
      <Card>
        <CardContent>
          <List>
            {data.map((item) => (
              <ListItem
                className="mb-4 last:mb-0"
                disablePadding
                key={item.title}>
                <Card
                  className="pr-12"
                  style={{ width: 100 + "%", position: "relative" }}>
                  <CardContent>
                    <span className="text-xl">{item.title}</span>
                    <span
                      className={cn(
                        "ml-2 text-2xl text-sky-200",
                        item.title === "Загальний прибуток:" &&
                          "!text-blue-500",
                        item.title === "Чистий прибуток:" && "!text-emerald-500"
                      )}>
                      {item.value}
                    </span>
                  </CardContent>
                  <div className="absolute bottom-0 right-0 rounded-tl bg-[#1677ff] w-7 h-[100%] "></div>
                </Card>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
