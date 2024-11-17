
# Cryptocurrency Orderbook Viewer  

A real-time cryptocurrency orderbook viewer built with Next.js v15. This project provides a live orderbook, market indicators, and market depth visualizations for trading pairs like BTC-USD, ETH-USD, and XRP-USD.  

---

## Features  

- **Real-time Orderbook**: Displays the top 10 levels of bids and asks for the selected trading pair.  
- **Spread Indicator**: A rolling 1-minute chart visualizing the price spread.  
- **Orderbook Imbalance**: Highlights the imbalance between bids and asks.  
- **Market Depth Chart**: A snapshot of the current market depth.  
- **Trading Pair Selector**: Switch between trading pairs (BTC-USD, ETH-USD, XRP-USD).  
- **Responsive Design**: Optimized for mobile and desktop devices.  

---

## Technologies  

### Framework  
- **Next.js v15**: Leveraging the app directory for routing and server-side rendering.  

### Libraries  
- **React-Chartjs-2**: Wrapper for Chart.js, used to create dynamic visualizations.  
- **Chart.js**: Core library for rendering charts.  

### Styling  
- **Tailwind CSS**: Utility-first CSS framework for responsive design.  

---

## Installation  

### Prerequisites  
- **Node.js**: Ensure you are using a version `^18.18.0 || ^19.8.0 || >= 20.0.0`.  

### Steps  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/crypto-orderbook-viewer.git  
   cd crypto-orderbook-viewer  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the development server:  
   ```bash  
   npm run dev  
   ```  

4. Open your browser at:  
   ```
   http://localhost:3000  
   ```  

---

## File Structure  

```  
app/  
├── loading.js                 // Displays a loading spinner  
├── page.js                    // Server-side rendering of the main page  
├── components/  
│   ├── OrderBook.js           // Displays real-time orderbook data  
│   ├── SpreadIndicator.js     // Visualizes the spread  
│   ├── MarketDepthChart.js    // Line chart for market depth  
│   ├── OrderbookImbalance.js  // Shows orderbook imbalance  
│   └── OrderBookClient.js     // Client-side logic for WebSocket and state management  
utils/  
└── websocket.js               // WebSocket utility for real-time data 
```  

---

## Assumptions  

- WebSocket connections fetch real-time data for trading pairs from a free and demo-compatible API.  
- Tailwind CSS is used for styling, ensuring consistency and responsiveness.  
- Default trading pairs include **BTC-USD**, **ETH-USD**, and **XRP-USD**, but the application can be extended.
- The imbalance between bids and asks is calculated as:
  Imbalance = (Total Bids - Total Asks) / (Total Bids + Total Asks)  
  Where:
  Total Bids = Sum of all bid amounts in the top 10 levels.
  Total Asks = Sum of all ask amounts in the top 10 levels.
- The price spread is calculated as:
  Spread = Best Ask Price - Best Bid Price  
  Where:
  Best Ask Price = Lowest price in the asks.
  Best Bid Price = Highest price in the bids.

---

