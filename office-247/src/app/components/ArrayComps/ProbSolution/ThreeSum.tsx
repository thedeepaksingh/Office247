import React, { useRef, useState } from "react";

const ThreeSum = () => {
  const [nums] = React.useState<number[]>([-1, 0, 1, 2, -1, -4]);
  const [target] = useState<number>(3); // Changed to 0 for valid result
  const [highlighted, setHighlighted] = useState<number[]>([]);
  const [foundIndices, setFoundIndices] = useState<number[] | null>(null);
  const [running, setRunning] = useState(false);

  const iRef = useRef(0);
  const jRef = useRef(1);
  const kRef = useRef(2);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetRefs = () => {
    iRef.current = 0;
    jRef.current = 1;
    kRef.current = 2;
  };

  const startVisualization = () => {
    if (running || foundIndices) return;

    resetRefs();
    setRunning(true);
    intervalRef.current = setInterval(() => {
      const i = iRef.current;
      const j = jRef.current;
      const k = kRef.current;

      if (i >= nums.length - 2) {
        clearInterval(intervalRef.current!);
        setRunning(false);
        return;
      }

      setHighlighted([i, j, k]);

      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        setFoundIndices([i, j, k]);
        clearInterval(intervalRef.current!);
        setRunning(false);
        return;
      }

      // Move to next triple
      kRef.current++;
      if (kRef.current >= nums.length) {
        jRef.current++;
        kRef.current = jRef.current + 1;
      }
      if (jRef.current >= nums.length - 1) {
        iRef.current++;
        jRef.current = iRef.current + 1;
        kRef.current = jRef.current + 1;
      }
    }, 1000);
  };

  const stopVisualization = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setRunning(false);
  };

  const resetVisualization = () => {
    stopVisualization();
    resetRefs();
    setFoundIndices(null);
    setHighlighted([]);
  };

  return (
    <div className="text-white pt-4">
      <div className="flex justify-between items-center mb-2 border-b border-gray-700 pb-2">
        <div className="space-x-2">
          <button
            className="bg-blue-500 px-3 py-1 rounded hover:bg-black"
            onClick={startVisualization}
            disabled={running || foundIndices !== null}
          >
            Start
          </button>
          <button
            className="bg-red-500 px-3 py-1 rounded hover:bg-black"
            onClick={stopVisualization}
            disabled={!running}
          >
            Stop
          </button>
          <button
            className="bg-yellow-500 px-3 py-1 rounded hover:bg-black"
            onClick={resetVisualization}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-2 mb-10 mt-4">
        <p className="text-xl text-gray-400">
          Target: <strong>{target}</strong>
        </p>
        <p className="text-xl text-gray-400">
          Highlighted: {highlighted ? highlighted.join(", ") : "None"}
        </p>
        <p className="text-xl text-gray-400">
          Found Indices: {foundIndices ? foundIndices.join(", ") : "None"}
        </p>
        <p className="text-xl text-gray-400">
          Current Indices: {iRef.current}, {jRef.current}, {kRef.current}
        </p>
        <p className="text-xl text-gray-400">
          Current Sum:{" "}
          {nums[iRef.current] + nums[jRef.current] + nums[kRef.current]}
        </p>
        <p className="text-xl text-gray-400">
          Current Numbers: {nums[iRef.current]}, {nums[jRef.current]},{" "}
          {nums[kRef.current]}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-4 ">
        <div className="flex gap-2"></div>
        {/* <p className="text-sm text-gray-400">
          Highlighted: {highlighted.join(", ")}
        </p> */}

        {nums.map((num, index) => {
          const isCurrent = highlighted.includes(index);
          const isPartOfResult = foundIndices?.includes(index);

          return (
            <div
              key={index}
              className={`p-3 rounded-md text-center w-10 transition-all duration-300 ease-in-out ${
                isPartOfResult
                  ? "bg-green-500"
                  : isCurrent
                  ? "bg-yellow-500"
                  : "bg-black"
              }`}
            >
              {num}
            </div>
          );
        })}
      </div>

      {foundIndices && (
        <p className="text-green-400">
          Found! nums[{foundIndices[0]}] + nums[{foundIndices[1]}] + nums[
          {foundIndices[2]}] = {target}
        </p>
      )}
    </div>
  );
};

export default ThreeSum;
