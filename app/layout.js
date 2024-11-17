import "./globals.css";

export const metadata = {
  title: 'Crypto Orderbook',
  description: 'Real-time crypto orderbook for BTC-USD',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-gray-900 text-gray-100 font-sans"
      >
        {children}
      </body>
    </html>
  );
}
