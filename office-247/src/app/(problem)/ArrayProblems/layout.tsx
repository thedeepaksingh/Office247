"use client";

import React from "react";

interface ArrayProblemsLayoutProps {
  children: [React.ReactNode]; // This prop will contain the child components passed to this layout
}

const ArrayProblemsLayout = ({ children }: ArrayProblemsLayoutProps) => {
  return (
    <div className="p-4 text-white">
      <div className="flex gap-4">
        <div className="w-[100%]">{children}</div> {/* Left 100% */}
      </div>
    </div>
  );
};

export default ArrayProblemsLayout;
