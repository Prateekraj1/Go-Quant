"use client";

import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const SpreadIndicator = ({ spreadHistory, selectedPairName }) => {
  const data = {
    labels: spreadHistory.map((_, idx) => `${idx}s`),
    datasets: [
      {
        label: "Spread (USD)",
        data: spreadHistory,
        borderColor: "#4ADE80",
        backgroundColor: "rgba(74, 222, 128, 0.2)",
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">
        Spread Indicator of {selectedPairName}
      </h2>
      <Line data={data} />
    </div>
  );
};

export default SpreadIndicator;
