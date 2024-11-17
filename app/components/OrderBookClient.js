"use client";

import { useEffect, useState } from "react";
import { connectWebSocket } from "@/utils/websocket";
import SpreadIndicator from "./SpreadIndicator";
import MarketDepthChart from "./MarketDepthChart";
import OrderbookImbalance from "./OrderbookImbalance";
import OrderBook from "./OrderBook";

export default function OrderBookClient({ initialOrderBook }) {
  const [orderBook, setOrderBook] = useState(initialOrderBook);
  const [spreadHistory, setSpreadHistory] = useState([]);
  const [imbalance, setImbalance] = useState(0);

  // Trading pair options
  const tradingPairs = [
    { name: "BTC-USD", value: "btcusdt", currency: "BTC" },
    { name: "ETH-USD", value: "ethusdt", currency: "ETH" },
    { name: "XRP-USD", value: "xrpusdt", currency: "XRP" },
  ];

  const [selectedPair, setSelectedPair] = useState(tradingPairs[0]); // Default to BTC-USD

  useEffect(() => {
    const ws = connectWebSocket(selectedPair.value, (data) => {
      setOrderBook({
        bids: data.bids.slice(0, 10),
        asks: data.asks.slice(0, 10),
      });

      const spread = parseFloat(data.asks[0][0]) - parseFloat(data.bids[0][0]);
      setSpreadHistory((prev) => [...prev.slice(-59), spread]);

      const totalBids = data.bids.reduce(
        (sum, [_, amount]) => sum + parseFloat(amount),
        0
      );
      const totalAsks = data.asks.reduce(
        (sum, [_, amount]) => sum + parseFloat(amount),
        0
      );
      setImbalance((totalBids - totalAsks) / (totalBids + totalAsks));
    });

    return () => ws.close();
  }, [selectedPair]);

  const handlePairChange = (event) => {
    const selected = tradingPairs.find(
      (pair) => pair.value === event.target.value
    );
    setSelectedPair(selected);
  };

  return (
    <div>
      <div className="mb-4 max-w-[400px] w-full">
        <label
          htmlFor="trading-pair"
          className="block text-lg font-medium mb-2"
        >
          Select Trading Pair:
        </label>
        <select
          id="trading-pair"
          className="border border-gray-300 rounded-md p-2 w-full text-black"
          value={selectedPair.value}
          onChange={handlePairChange}
        >
          {tradingPairs.map((pair) => (
            <option key={pair.value} value={pair.value} className="text-black">
              {pair.name}
            </option>
          ))}
        </select>
      </div>

      <OrderBook orderBook={orderBook} selectedPairName={selectedPair.name} currency={selectedPair.currency}/>
      <SpreadIndicator
        spreadHistory={spreadHistory}
        selectedPairName={selectedPair.name}
      />
      <OrderbookImbalance
        imbalance={imbalance}
        selectedPairName={selectedPair.name}
      />
      <MarketDepthChart
        bids={orderBook.bids}
        asks={orderBook.asks}
        selectedPairName={selectedPair.name}
      />
    </div>
  );
}
