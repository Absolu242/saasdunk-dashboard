import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { colors } from "../../theme/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];

export const data = {
  labels,
  datasets: [
    {
      data: [70, 20, 60, 30, 10, 40],
      borderColor: colors.blue2,
      backgroundColor: colors.blue5,
    },
  ],
};

export function VerticalBar() {
  return <Bar options={options} data={data} />;
}
