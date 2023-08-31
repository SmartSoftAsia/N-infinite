import "../styles/globals.css";
import React from "react";

export const metadata = {
  title: "N-infinite",
  description: "N-infinite",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="debug-screens">{children}</body>
    </html>
  );
};

export default RootLayout;
