import { List, ListItem, Typography } from "@mui/material";
import React from "react";

export default function StatsInCard({ item }) {
  return (
    <List>
      <ListItem>
        <Typography>
          Прибуток групи:{" "}
          <span className="text-black text-xl bg-sky-400 p-1 rounded">
            {item.income}
          </span>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>
          Заробітна плата викладача:{" "}
          <span className="text-black text-xl bg-sky-400 p-1 rounded">0</span>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>
          Чистий прибуток групи:{" "}
          <span className="text-black text-xl bg-sky-400 p-1 rounded">
            {item.cleareIncome}
          </span>
        </Typography>
      </ListItem>
    </List>
  );
}
