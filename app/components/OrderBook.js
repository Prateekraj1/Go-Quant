const OrderBook = ({ orderBook, selectedPairName, currency }) => (
  <div className="p-4 bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">
      Orderbook ({selectedPairName})
    </h2>
    <table className="w-full text-left">
      <thead>
        <tr className="text-gray-400">
          <th className="py-2">Price (USD)</th>
          <th className="py-2">Amount ({currency})</th>
          <th className="py-2">Type</th>
        </tr>
      </thead>
      <tbody>
        {orderBook.bids.map(([price, amount], idx) => (
          <tr key={`bid-${idx}`} className="text-green-500">
            <td className="py-1">{price}</td>
            <td className="py-1">{amount}</td>
            <td className="py-1">Bid</td>
          </tr>
        ))}
        {orderBook.asks.map(([price, amount], idx) => (
          <tr key={`ask-${idx}`} className="text-red-500">
            <td className="py-1">{price}</td>
            <td className="py-1">{amount}</td>
            <td className="py-1">Ask</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default OrderBook;
