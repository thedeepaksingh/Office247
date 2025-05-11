"use client";

import React from "react";
import TwoSumVisualizer from "@/components/ArrayComps/ArrayProbSolution/TwoSum";
// Defining components inside a constant object
const multipleComponentsArray = {
  TwoSum: TwoSumVisualizer,

  component2: () => {
    return <div>This is component 2</div>;
  },

  component3: () => {
    return <div>This is component 3</div>;
  },
};

// Exporting the components object
export default multipleComponentsArray;
