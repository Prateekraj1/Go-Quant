"use client";

import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const MarketDepthChart = ({ bids, asks, selectedPairName }) => {
  const data = {
    labels: [...bids.map(([price]) => price), ...asks.map(([price]) => price)],
    datasets: [
      {
        label: "Market Depth",
        data: [
          ...bids.map(([_, amount]) => amount),
          ...asks.map(([_, amount]) => amount),
        ],
        borderColor: "#60A5FA",
        backgroundColor: "rgba(96, 165, 250, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">
        Market Depth Chart for {selectedPairName}
      </h2>
      <Line data={data} />
    </div>
  );
};

export default MarketDepthChart;
