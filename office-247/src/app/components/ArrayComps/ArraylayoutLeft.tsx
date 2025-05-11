import ArrayProblem from "@/app/files/arrayjson";
import React from "react";
import { FaBolt, FaCode, FaTag } from "react-icons/fa";
import multipleComponents from "@/app/ProblemSolutions/Array/SolutionArrays";

interface ArrayLayoutLeftProps {
  sharedItem: string[];
}

const ArrayLayoutLeft: React.FC<ArrayLayoutLeftProps> = ({ sharedItem }) => {
  if (!sharedItem || sharedItem.length === 0) {
    return (
      <div className="text-white p-4">Select a problem to view details.</div>
    );
  }

  const latestTitle = sharedItem[sharedItem.length - 1];
  const problem = ArrayProblem.find((item) => item.title === latestTitle);
  if (!problem) {
    return <div className="text-red-500 p-4">Problem not found.</div>;
  }

  const renderSolutionKey =
    problem.rendersolution as keyof typeof multipleComponents;
  const SolutionComponent = React.createElement(
    multipleComponents[renderSolutionKey]
  );

  return (
    <div className="p-6 bg-gray-900 rounded-lg text-white w-full space-y-4">
      <h2 className="text-xl font-bold">{problem.title}</h2>
      <p className="text-base text-gray-200">{problem.description}</p>
      <div className="flex items-center space-x-4 text-yellow-300">
        <FaBolt />
        <span>{problem.difficulty}</span>
      </div>
      <div className="flex items-center space-x-2 text-green-300">
        <FaTag />
        {problem.tags?.map((tag, index) => (
          <span key={index} className="text-sm bg-green-900 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center text-blue-300 space-x-2">
        <FaCode />
        <span className="text-sm">{problem.rendersolution}</span>
      </div>
      {/* // check if the component is not undefined else render the component */}
      {SolutionComponent === undefined ? (
        <div className="text-red-500 p-4">Solution component not found.</div>
      ) : (
        <div className="text-green-300 p-4">{SolutionComponent}</div>
      )}
      {/* Render the solution component */}
    </div>
  );
};

export default ArrayLayoutLeft;
