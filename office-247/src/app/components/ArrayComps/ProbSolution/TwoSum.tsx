// components/TwoSumVisualizer.tsx
import React, { useEffect, useRef, useState } from "react";

const TwoSumVisualizer: React.FC = () => {
  const [nums] = useState([2, 11, 15, 7, 3, 6, 1, 8, 4, 5]);
  const [target] = useState(9);
  const [highlighted, setHighlighted] = useState<number[]>([]);
  const [foundIndices, setFoundIndices] = useState<number[] | null>(null);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);
  const mapRef = useRef<Record<number, number>>({});

  const startVisualization = () => {
    if (intervalRef.current || foundIndices) return; // prevent restart

    setRunning(true);
    intervalRef.current = setInterval(() => {
      const i = indexRef.current;
      if (i >= nums.length) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        setRunning(false);
        return;
      }

      const complement = target - nums[i];
      if (mapRef.current[complement] !== undefined) {
        const first = mapRef.current[complement];
        const second = i;
        setFoundIndices([first, second]);
        setHighlighted((prev) => [...prev, first, second]);
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        setRunning(false);
      } else {
        mapRef.current[nums[i]] = i;
        setHighlighted((prev) => [...prev, i]);
        indexRef.current++;
      }
    }, 800); // reduce interval to make it faster if needed
  };

  const stopVisualization = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setRunning(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="text-white p-4">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm text-gray-400">
          Target: <strong>{target}</strong>
        </p>
        <div className="space-x-2">
          <button
            className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            onClick={startVisualization}
            disabled={running || foundIndices !== null}
          >
            Start
          </button>
          <button
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            onClick={stopVisualization}
            disabled={!running}
          >
            Stop
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {nums.map((num, index) => {
          const isHighlighted = highlighted.includes(index);
          const isFound = foundIndices?.includes(index);

          return (
            <div
              key={index}
              className={`p-3 rounded-md text-center w-10 ${
                isFound
                  ? "bg-green-500"
                  : isHighlighted
                  ? "bg-yellow-500"
                  : "bg-black"
              } transition-all duration-300 ease-in-out`}
            >
              {num}
            </div>
          );
        })}
      </div>

      {foundIndices && (
        <p className="text-green-400">
          Found! nums[{foundIndices[0]}] + nums[{foundIndices[1]}] = {target}
        </p>
      )}
    </div>
  );
};

export default TwoSumVisualizer;
