"use client";

import React from "react";

const ContainerWithMostWater = () => {
  const [height] = React.useState<number[]>([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  const [area, setArea] = React.useState<number>(0);
  const [highlighted, setHighlighted] = React.useState<number[]>([]);
  const [maxhighlighted, setMaxHighlighted] = React.useState<number[]>([]);
  const [message, setMessage] = React.useState<string[]>([]);
  const [running, setRunning] = React.useState(false);
  const maxWaterHeight = React.useRef(0);
  const maxAreaRef = React.useRef(0);
  const leftRef = React.useRef(0);
  const rightRef = React.useRef(height.length - 1);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startVisualization = (): void => {
    try {
      if (running || maxAreaRef.current !== 0) return;

      setRunning(true);
      setMessage((prev) => [...prev, "Starting the visualization..."]);

      intervalRef.current = setInterval(() => {
        const left = leftRef.current;
        const right = rightRef.current;

        if (left >= right) {
          setHighlighted(maxhighlighted);
          clearInterval(intervalRef.current!);
          setRunning(false);
          setMessage((prev) => [...prev, "Visualization completed."]);
          return;
        }

        const width = right - left;
        const currentArea = Math.min(height[left], height[right]) * width;

        setMessage((prev) => [...prev, `Current Width: ${width}`]);
        setMessage((prev) => [...prev, `Current Area: ${currentArea}`]);
        setMessage((prev) => [
          ...prev,
          `Highlighted Index: ${left} and ${right}`,
        ]);
        setArea(currentArea);
        setMessage((prev) => [...prev, `Area: ${area}`]);

        setHighlighted([left, right]);
        if (currentArea > maxAreaRef.current) {
          const newMax = [left, right];
          setMaxHighlighted(newMax);
          maxWaterHeight.current = height[right];
          setHighlighted(maxhighlighted);
          maxAreaRef.current = currentArea;
        }

        if (height[left] < height[right]) {
          leftRef.current += 1;
        } else if (height[left] > height[right]) {
          rightRef.current -= 1;
        } else {
          leftRef.current += 1;
          rightRef.current -= 1;
        }
      }, 2000);
    } catch (e) {
      console.error(e);
      setMessage((prev) => [
        ...prev,
        "An error occurred while starting the visualization. " + e,
      ]);
    }
  };

  const stopVisualization = () => {
    try {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setMaxHighlighted([]);
        setRunning(false);
        setMessage((prevMessages) => [
          ...prevMessages,
          "Visualization stopped.",
        ]);
      }
    } catch (e) {
      console.log(e);
      setMessage((prevMessages) => [
        ...prevMessages,
        "An error occurred while stopping the visualization." + e,
      ]);
      throw new Error("Function not implemented.");
    }
  };
  const resetVisualization = () => {
    try {
      leftRef.current = -0;
      rightRef.current = height.length - 1;
      maxAreaRef.current = 0;
      setMaxHighlighted([]);
      setArea(0);
      setHighlighted([]);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setRunning(false);
      setMessage([]);
    } catch (e) {
      console.log(e);
      setMessage((prevMessages) => [
        ...prevMessages,
        "An error occurred while resetting the visualization." + e,
      ]);
      throw new Error("Function not implemented.");
    }
  };

  return (
    <div className="flex max-h-120 flex-row gap-4 h-screen bg-gray-900">
      <div className="flex flex-col h-full min-w-[50%] bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2 border-b border-gray-200 pb-2">
          <div className="space-x-2">
            <button
              className="bg-blue-500 px-3 py-1 rounded hover:bg-black cursor-pointer"
              onClick={startVisualization}
              // disabled={running || foundIndices !== null}
            >
              Start
            </button>
            <button
              className="bg-red-500 px-3 py-1 rounded hover:bg-black cursor-pointer"
              onClick={stopVisualization}
              disabled={!running}
            >
              Stop
            </button>
            <button
              className="bg-yellow-500 px-3 py-1 rounded hover:bg-black cursor-pointer"
              onClick={resetVisualization}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center min-h-80 mt-6">
          <ul className="flex space-x-2 h-full items-end">
            {height.map((h, index) => {
              const isBetweenMax =
                maxhighlighted.length === 2 &&
                index >= maxhighlighted[0] &&
                index <= maxhighlighted[1];
              let waterLevel = 0;
              if (running) {
                waterLevel =
                  isBetweenMax && maxhighlighted.length === 2
                    ? Math.min(
                        height[maxhighlighted[0]],
                        height[maxhighlighted[1]]
                      )
                    : 0;
              }

              const isHighlighted = highlighted.includes(index);
              const isMaxHighlighted = maxhighlighted.includes(index);

              return (
                <React.Fragment key={index}>
                  <li
                    className={`px-2 rounded-t flex items-end justify-center transition-all duration-500 border-2 ${
                      isHighlighted
                        ? "bg-red-800"
                        : isMaxHighlighted
                        ? "bg-yellow-600"
                        : "bg-green-800"
                    }`}
                    style={{ height: `${h * 35}px` }}
                  >
                    {h}
                  </li>
                  {index < height.length - 1 && (
                    <li
                      className="flex items-end justify-center"
                      style={{ height: `${waterLevel * 35}px` }}
                    >
                      <span
                        className={`w-full rounded-t ${
                          isBetweenMax ? "bg-blue-600" : "bg-transparent"
                        }`}
                        style={{
                          height: `${waterLevel * 35}px`,
                          transition: "all 0.5s ease-in-out",
                          width: "30px",
                        }}
                      />
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
          <div className="flex flex-row mt-2">
            <span className="font-bold text-white p-2">Max Area: </span>
            <span className="p-2">{maxAreaRef.current}</span>
            <span className="p-2 font-bold text-white">
              Highlighted Index:{" "}
            </span>
            <span className="p-2">{highlighted}</span>
            <span className="font-bold text-white p-2">
              Max Highlighted Index:{" "}
            </span>
            <span className="p-2">{maxhighlighted}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-[50%] bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2 border-b border-gray-200 pb-2">
          <div className="text-white font-semibold text-2xl">
            <h2 className="">Process flow</h2>
          </div>
        </div>
        <div className="flex flex-col   mt-6 overflow-y-auto">
          <ul className=" text-white space-y-2">
            {message.map((msg, index) => (
              <li
                key={index}
                className="px-4 py-2 bg-gray-700 rounded-lg shadow-md transition-all duration-500"
              >
                {`Step ${index + 1}: ${msg}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContainerWithMostWater;
