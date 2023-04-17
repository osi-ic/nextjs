import "./globals.css";

export const metadata = {
  title: "Store",
  description: "Wes store BAnh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
