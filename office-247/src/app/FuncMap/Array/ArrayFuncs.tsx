"use client";

import React from "react";

const componentMap: { [key: string]: React.FC } = {
  TwoSumVisualizer: React.lazy(
    () => import("@/app/components/ArrayComps/ProbSolution/TwoSum")
  ), // Ensure the file exists at this path or update the path
  Validparenthesis: React.lazy(
    () => import("@/app/components/ArrayComps/ProbSolution/Validparenthesis")
  ),
  ThreeSum: React.lazy(
    () => import("@/app/components/ArrayComps/ProbSolution/ThreeSum")
  ),
  ContainerWithMostWater: React.lazy(
    () =>
      import("@/app/components/ArrayComps/ProbSolution/ContainerWithMostWater")
  ),
  LongestSubstring: React.lazy(
    () => import("@/app/components/ArrayComps/ProbSolution/LongestSubstring")
  ),
  MergeSortedArray: React.lazy(
    () => import("@/app/components/ArrayComps/ProbSolution/MergeSortedArray")
  ),
  RotateArray: React.lazy(
    () => import("@/app/components/ArrayComps/ProbSolution/RotateArray")
  ),
  SearchInRotatedSortedArray: React.lazy(
    () =>
      import(
        "@/app/components/ArrayComps/ProbSolution/SearchInRotatedSortedArray"
      )
  ),
  SearchInRotatedSortedArray2: React.lazy(
    () =>
      import(
        "@/app/components/ArrayComps/ProbSolution/SearchInRotatedSortedArray2"
      )
  ),
  RemoveDuplicates: React.lazy(
    () => import("@/app/components/ArrayComps/ProbSolution/RemoveDuplicates")
  ),
  RemoveElement: React.lazy(
    () => import("@/app/components/ArrayComps/ProbSolution/RemoveElement")
  ),
  GameOfLife: React.lazy(
    () => import("@/app/components/ArrayComps/ProbSolution/GameOfLife")
  ),

  // Add more mappings here
};

export default componentMap;
