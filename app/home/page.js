import OrderBookClient from "../components/OrderBookClient";

async function fetchInitialOrderBook(pair) {
  const response = await fetch(
    `https://api.binance.com/api/v3/depth?symbol=${pair.toUpperCase()}&limit=10`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch initial orderbook data.");
  }
  const data = await response.json();
  return {
    bids: data.bids,
    asks: data.asks,
  };
}

export default async function Home() {
  const initialOrderBook = await fetchInitialOrderBook("BTCUSDT");

  return (
    <div className="container mx-auto px-4 py-6">
      <OrderBookClient initialOrderBook={initialOrderBook} />
    </div>
  );
}
