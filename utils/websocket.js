export const connectWebSocket = (pair, callback) => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@depth10@100ms`);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      callback(data);
    };
  
    return ws;
  };
  