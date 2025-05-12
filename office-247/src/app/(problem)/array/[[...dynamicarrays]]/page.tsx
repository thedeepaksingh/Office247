"use client";

import React from "react";
import ArrayLayoutLeft from "@/app/components/ArrayComps/CustomLayout/ProblemPanel";
import ArrayProblem from "@/app/Files/ArrayProbDetails/arrayjson";

const DynamicArrayPage = () => {
  // const params = useParams();
  // const dynamicarrays = params.dynamicarrays as string[] | undefined;

  // if (!dynamicarrays || dynamicarrays.length === 0) {
  //   return <h1>Default Array Problems Page</h1>;
  // }

  const [sharedArrayItem, setSharedArrayItem] = React.useState<string[]>([]);
  const [isItemClicked, setIsItemClicked] = React.useState(false);

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
    <div>
      <div>
        <div className="h-screen text-white ">
          <div className="flex gap-4">
            <div className=" p-2 w-[60%] gap-4 bg-gray-800 rounded-lg">
              <ArrayLayoutLeft sharedItem={sharedArrayItem} />
            </div>

            <div className="p-4 w-[40%] bg-gray-800 h-full rounded-lg shadow-lg">
              <h2 className="text-cyan-500 text-2xl font-semibold mb-4">
                Array Problems
              </h2>
              <button
                className="bg-black text-white px-4 py-2 rounded mb-4"
                onClick={resetLeftPanel}
              >
                <span className="text-xs font-bold">Reset Visualization</span>
              </button>
              <div className="flex flex-wrap gap-3 overflow-y-auto max-h-[80vh]">
                {ArrayProblem.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleItemClick(item.title)}
                    className="cursor-pointer transition duration-200 transform hover:scale-105"
                  >
                    <span className="inline-flex items-center rounded-md bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 ring-1 ring-yellow-500/50 shadow-sm hover:bg-yellow-200">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicArrayPage;
