"use client";

import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const [groups, setGroups] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data/groups");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setGroups(responseData);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };
    fetchData();

    const groupNames = groups.map((group) => group.name);
    const groupClearIncomes = groups.map((group) => group.cleareIncome);

    if (chartRef.current) {
      const labels = groupNames;
      const data = {
        labels: groupNames,
        datasets: [
          {
            // label: "Чистый доход группы",
            data: groupClearIncomes,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              // Добавьте другие цвета, если нужно
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              // Добавьте другие цвета, если нужно
            ],
            borderWidth: 1,
          },
        ],
      };

      const ctx = chartRef.current.getContext("2d");
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      // Создаем новый график
      chartRef.current.chart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [chartRef.current]);

  return (
    <div className="" >
      <canvas style={{width: 1000}}  ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
