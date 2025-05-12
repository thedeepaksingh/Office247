"use client";

import React from "react";
import ArrayLayoutLeft from "@/app/components/ArrayComps/CustomLayout/ProblemPanel";
import ArrayProblem from "@/app/Files/ArrayProbDetails/arrayjson";
import { FaUndoAlt } from "react-icons/fa";

const DynamicArrayPage = () => {
  // const params = useParams();
  // const dynamicarrays = params.dynamicarrays as string[] | undefined;

  // if (!dynamicarrays || dynamicarrays.length === 0) {
  //   return <h1>Default Array Problems Page</h1>;
  // }

  const [sharedArrayItem, setSharedArrayItem] = React.useState<string[]>([]);
  const [isItemClicked, setIsItemClicked] = React.useState(false);
  const [isArrayProblem, setIsArrayProblem] = React.useState<[]>([]);
  const [isStringProblem, setIsStringProblem] = React.useState<[]>([]);

  const handleItemClick = (item: string) => {
    setSharedArrayItem((prev) => [...prev, item]);
    setIsItemClicked(!isItemClicked);
    console.log("Item clicked:", item);
  };

  const resetLeftPanel = () => {
    setSharedArrayItem([]);
    setIsItemClicked(false);
  };

  return (
    <div className="h-screen text-white">
      <div className="flex gap-4">
        {/* Left Panel */}
        <div className="p-2 w-[70%] gap-4 bg-gray-800 rounded-lg">
          <ArrayLayoutLeft sharedItem={sharedArrayItem} />
        </div>

        {/* Right Panel */}
        <div className="p-4 w-[30%] bg-gray-900 h-full rounded-lg shadow-lg border border-gray-700">
          <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
            <div className="text-2xl font-bold text-cyan-500">Problems</div>
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors duration-200"
              onClick={resetLeftPanel}
            >
              <FaUndoAlt />
              {/* <span className="text-sm font-bold">Reset</span> */}
            </button>
          </div>

          <div className="flex flex-wrap gap-3 overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 mt-8">
            {ArrayProblem.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item.title)}
                className="cursor-pointer transition-transform duration-200 hover:scale-105"
              >
                <span className="inline-flex items-center rounded-md bg-gray-700 px-3 py-1 text-md font-medium text-white hover:bg-gray-600 transition-colors duration-200">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicArrayPage;
