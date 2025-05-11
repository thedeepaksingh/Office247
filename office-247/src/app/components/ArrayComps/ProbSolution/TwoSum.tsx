// components/TwoSumVisualizer.tsx
import React, { useEffect, useState } from "react";

const TwoSumVisualizer: React.FC = () => {
  const [nums] = useState([2, 11, 15, 7, 3]);
  const [target] = useState(9);
  const [highlighted, setHighlighted] = useState<number[]>([]);
  const [foundIndices, setFoundIndices] = useState<number[] | null>(null);

  useEffect(() => {
    let map: Record<number, number> = {};
    let i = 0;

    const interval = setInterval(() => {
      if (i >= nums.length) {
        clearInterval(interval);
        return;
      }

      const complement = target - nums[i];
      if (map[complement] !== undefined) {
        setFoundIndices([map[complement], i]);
        clearInterval(interval);
      } else {
        map[nums[i]] = i;
        setHighlighted((prev) => [...prev, i]);
        i++;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nums, target]);

  return (
    <div className="text-white p-4">
      <p className="text-sm text-gray-400 mb-2">
        Target:  <strong>{target}</strong>
      </p>
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
                  : "bg-gray-700"
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
