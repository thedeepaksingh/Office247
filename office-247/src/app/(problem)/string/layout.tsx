import React from "react";

export const metadata = {
  title: "Array Problems",
  description: "Practice problems related to arrays",
};

const StringProblemsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
      <header>
        <h2>String Problems Section</h2>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default StringProblemsLayout;
