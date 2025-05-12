import React from "react";

const Validparenthesis = () => {
  return (
    <div className="text-white p-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-400">
          {/* Target: <strong>{target}</strong> */}
        </p>
        <div className="space-x-2">
          <button
            className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            // onClick={startVisualization}
            // disabled={running || foundIndices !== null}
          >
            Start
          </button>
          <button
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            // onClick={stopVisualization}
            // disabled={!running}
          >
            Stop
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4"></div>
    </div>
  );
};

export default Validparenthesis;
