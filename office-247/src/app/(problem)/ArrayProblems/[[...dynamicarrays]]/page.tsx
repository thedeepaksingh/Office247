"use client";

import { useParams } from "next/navigation";
import React from "react";

const DynamicArrayPage = () => {
  const params = useParams();
  const dynamicarrays = params.dynamicarrays as string[] | undefined;

  if (!dynamicarrays || dynamicarrays.length === 0) {
    return <h1>Default Array Problems Page</h1>;
  }

  return (
    <div>
      <h1>Dynamic Array Page</h1>
      <p>You are viewing: {dynamicarrays.join(" / ")}</p>

      {/* You can conditionally render content here */}
      {dynamicarrays[0].toLowerCase() === "2DArrays" && (
        <p>This is the 2D Arrays Page.</p>
      )}
      {dynamicarrays[0].toLowerCase() === "3DArrays" && (
        <p>This is the 3D Arrays Page.</p>
      )}
      {dynamicarrays[0].toLowerCase() === "matrices" && (
        <p>This is the Matrices Page.</p>
      )}
    </div>
  );
};

export default DynamicArrayPage;
