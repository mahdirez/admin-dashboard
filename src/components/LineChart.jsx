import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ isDashboard = false }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const chartOptions = isDashboard
        ? {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              x: {
                display: true,
              },
              y: {
                display: true,
              },
            },
          }
        : {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          };

      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "show line",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: chartOptions,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
