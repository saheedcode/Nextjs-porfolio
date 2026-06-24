// app/layout.js

import "./globals.css";

export const metadata = {
  title: "Saheed Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
