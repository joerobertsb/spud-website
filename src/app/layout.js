// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "spud",
  description: "Official spud Website",
};

export default function SiteLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}