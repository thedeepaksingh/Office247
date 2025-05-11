"use client";

import { useParams } from "next/navigation";
import React from "react";
import ArrayLayoutLeft from "@/components/ArrayComps/ArraylayoutLeft";
import ArrayLayoutRight from "@/components/ArrayComps/ArrayLayoutRight";
import ArrayProblem from "@/app/files/arrayjson";

const DynamicArrayPage = () => {
  // const params = useParams();
  // const dynamicarrays = params.dynamicarrays as string[] | undefined;

  // if (!dynamicarrays || dynamicarrays.length === 0) {
  //   return <h1>Default Array Problems Page</h1>;
  // }

  // sharing this to both the components
  const [sharedArrayItem, setSharedArrayItem] = React.useState<string[]>([]);
  // variable to check if the item is clicked on right and change the layout of right to show item details
  const [isItemClicked, setIsItemClicked] = React.useState(false);

  // function to response on click of the item in the right side
  const handleItemClick = (item: string) => {
    setSharedArrayItem((prev) => [...prev, item]);
    setIsItemClicked(!isItemClicked); // toggle this item to show the details of the item
    console.log("Item clicked:", item);
  };

  return (
    <div>
      <div>
        <div className="h-screen text-white ">
          <div className="flex gap-4">
            <div className=" p-2 w-[60%] gap-4 bg-gray-800 rounded-lg">
              <ArrayLayoutLeft sharedItem={sharedArrayItem} />
            </div>
            {/* Left 100% */}
            <div className="p-2 w-[40%] gap-4 bg-gray-800 h-full rounded-lg">
              <span className="text-white">
                {ArrayProblem.map((item, index) => (
                  <div
                    key={index}
                    className="badge badge-primary text-white"
                    onClick={() => {
                      handleItemClick(item.title);
                    }}
                  >
                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset cursor-pointer">
                      {item.title}
                    </span>
                  </div>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicArrayPage;
