const OrderbookImbalance = ({ imbalance, selectedPairName }) => (
  <div className="p-4 bg-gray-800 rounded-lg shadow-md mt-4">
    <h2 className="text-xl font-semibold mb-4">
      Orderbook Imbalance of {selectedPairName}
    </h2>
    <p className="text-lg">
      Imbalance:{" "}
      <span className="font-bold">{(imbalance * 100).toFixed(2)}%</span>
    </p>
  </div>
);

export default OrderbookImbalance;
