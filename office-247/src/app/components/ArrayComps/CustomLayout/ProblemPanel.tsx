import ArrayProblem from "@/app/Files/ArrayProbDetails/arrayjson";
import React, { Suspense } from "react";
import { FaBolt, FaCode, FaTag } from "react-icons/fa";
import componentMap from "@/app/FuncMap/Array/ArrayFuncs";

interface DynamicLayoutProps {
  sharedItem: string[];
}

const DynamicLayout: React.FC<DynamicLayoutProps> = ({ sharedItem }) => {
  if (!sharedItem || sharedItem.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-red-500 text-2xl">
        No Problem Selected! Please select a problem to view details.
      </div>
    );
  }

  const latestTitle = sharedItem[sharedItem.length - 1];
  const problem = ArrayProblem.find((item) => item.title === latestTitle);
  if (!problem) {
    return <div className="text-red-500 p-4">Problem not found.</div>;
  }

  // const renderSolutionKey =
  //   problem.rendersolution as keyof typeof multipleComponents;
  // const SolutionComponent = React.createElement(
  //   multipleComponents[renderSolutionKey]
  // );

  const ComponentToRender = componentMap[problem.rendersolution];
  if (!ComponentToRender) {
    alert("Component not found");
    return <div className="text-red-500 p-4">Component not found.</div>;
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg text-white w-full space-y-4">
      <Suspense
        fallback={<div className="text-gray-400">Loading component...</div>}
      >
        {ComponentToRender ? (
          <ComponentToRender />
        ) : (
          <div className="text-red-400">Component not found</div>
        )}
      </Suspense>

      {/* Title */}
      <h2 className="text-xl font-bold text-cyan-500">{problem.title}</h2>

      {/* Main 2-column content */}
      <div className="flex flex-col md:flex-row md:space-x-6 border-t border-gray-700 pt-6">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <p className="text-base text-gray-200">{problem.description}</p>
          <div className="flex items-center space-x-4 text-yellow-300">
            <FaBolt />
            <span>{problem.difficulty}</span>
          </div>
          <div className="flex items-center space-x-2 text-green-300 flex-wrap">
            <FaTag />
            {problem.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-green-900 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-blue-300 space-x-2">
            <FaCode />
            <span className="text-sm">{problem.rendersolution}</span>
          </div>
          {/* // constraints */}
          <h3 className="text-lg font-semibold text-gray-300 underline">
            Constraints
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            {Object.entries(problem.constraints).map(([key, value]) => (
              <li key={key} className="text-sm">
                {key}: {value}
              </li>
            ))}
          </ul>
          <span className="text-cyan-500">Time Complexity :</span>
          <span> {problem.time_complexity}</span>
          <span className="pl-2 text-cyan-500">Space Complexity : </span>
          <span>{problem.space_complexity}</span>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4 mt-6 md:mt-0">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-yellow-400 underline">
              Hints
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              {problem.hints || "No time complexity information."}
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-yellow-400 underline">
              Solution Info
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              {problem.solution || "No time complexity information."}
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-yellow-400 underline">
              Edge Cases
            </h3>
            <ul className="list-disc list-inside text-gray-100">
              {problem.edge_cases.map((item, index) => (
                <li key={index} className="text-sm pt-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicLayout;
