import React from "react";
import ReactApexChart from "react-apexcharts";

const RangeChart = () => {
  const [chartData, setChartData] = React.useState({
    series: [20, 10, 15, 25],
    options: {
      chart: {
        type: "donut",
        width: 200,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      labels: [
        "Weekly Half Leaves",
        "Monthly Half Leaves",
        "Weekly Full Leaves",
        "Monthly Full Leaves",
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={500}
        width={500}
      />
    </div>
  );
};

export default RangeChart;
