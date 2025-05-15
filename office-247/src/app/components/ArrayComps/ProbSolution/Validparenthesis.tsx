import React from "react";

const Validparenthesis = () => {
  // variables
  const [parenthesis] = React.useState<string>("({[]})");
  const [parenthesisArray] = React.useState<string[]>(parenthesis.split(""));
  const [highlighted, setHighlighted] = React.useState<string[]>([]);
  const [running, setRunning] = React.useState(false);
  const [mapParenthesis] = React.useState<Map<string, string>>(
    new Map([
      ["(", ")"],
      ["{", "}"],
      ["[", "]"],
    ])
  );
  const [isValid, setIsValid] = React.useState<boolean>(false);

  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const iRef = React.useRef(0);
  const processMessage = React.useRef<string[]>([]);

  const resetRefs = () => {
    iRef.current = 0;
    setHighlighted([]); // Clear the highlighted array
    processMessage.current = []; // Clear the process message array
    setIsValid(false); // Reset the isValid state
  };

  // function to be executed when the component mounts
  const startVisualization = () => {
    try {
      let i = 0;
      if (running) return;
      resetRefs();
      setRunning(true);
      processMessage.current.push("Starting visualization...");
      // if (i == 0) {
      //   setHighlighted([i.toString()]);
      // }

      intervalRef.current = setInterval(() => {
        if (i >= parenthesisArray.length) {
          clearInterval(intervalRef.current!);
          setRunning(false);
          processMessage.current.push("Finished visualization.");
          return;
        }
        const currentChar = parenthesisArray[i];

        setHighlighted((prev) => [...prev, i.toString()]);

        processMessage.current.push(
          `Current character: ${currentChar}, Index: ${i}`
        );
        i++;

        if (mapParenthesis.has(currentChar)) {
          highlighted.push(currentChar);
          // console.log(`Pushed ${currentChar} to stack`);
          processMessage.current.push(
            `Pushed ${currentChar} to stack, Stack: ${highlighted.join(", ")}`
          );
        } else {
          // If it's a closing bracket, check if it matches the last opening bracket
          const lastOpeningBracket = highlighted.pop();
          if (lastOpeningBracket) {
            const expectedClosingBracket =
              mapParenthesis.get(lastOpeningBracket);
            if (expectedClosingBracket === currentChar) {
              // console.log(`Matched ${lastOpeningBracket} with ${currentChar}`);
              processMessage.current.push(
                `Matched ${lastOpeningBracket} with ${currentChar}, Stack: ${highlighted.join()}`
              );
            } else {
              // console.log(
              //   `Mismatch! Expected ${expectedClosingBracket}, but got ${currentChar}`
              // );
              processMessage.current.push(
                `Mismatch! Expected ${expectedClosingBracket}, but got ${currentChar}`
              );
            }
          }
        }
      }, 1000);

      // Clear the interval when the component unmounts
      return () => {
        // Check if the stack is empty to determine if the parenthesis is valid
        if (highlighted.length === 0) {
          // console.log("The parenthesis is valid.");
          processMessage.current.push("The parenthesis is valid.");
          setIsValid(true);
        } else {
          // console.log("The parenthesis is not valid.");
          processMessage.current.push("The parenthesis is not valid.");
          setIsValid(false);
        }
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    } catch (e) {
      console.log("Error in startVisualization: ", e);
      processMessage.current.push(
        "Error in startVisualization: " +
          (e instanceof Error ? e.toString() : String(e))
      );
      setRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }
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
    setHighlighted([]);
  };

  return (
    <section className="text-white pt-4">
      <div className="flex justify-between items-center mb-2 border-b border-gray-700 pb-2">
        <div className="space-x-2">
          <button
            className="bg-blue-500 px-3 py-1 rounded hover:bg-black"
            onClick={startVisualization}
            // disabled={running || foundIndices !== null}
          >
            Start
          </button>
          <button
            className="bg-red-500 px-3 py-1 rounded hover:bg-black"
            onClick={stopVisualization}
            // disabled={!running}
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
          Target: <strong>{parenthesis.split("")}</strong>
        </p>
        |
        <p className="text-xl text-gray-400">
          {/* Highlighted: {highlighted ? highlighted.join(", ") : "None"} */}
          Is Valid Parenthesis: {isValid ? "True" : "False"}
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-2 mb-4 ">
        <div className="flex items-center justify-center  w-[70%] gap-2">
          {parenthesisArray.map((num, index) => {
            // const isCurrent = highlighted.includes(index);
            // const isPartOfResult = foundIndices?.includes(index);
            const isCurrent = highlighted.includes(index.toString());

            return (
              <div
                key={index}
                className={`p-3 rounded-md text-center w-10 transition-all duration-300 ease-in-out ${
                  isCurrent ? "bg-yellow-500" : "bg-black"
                }`}
              >
                {num}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-[30%] gap-2 max-h-80 overflow-y-scroll">
          <ul className="text-gray-400 ">
            {processMessage.current.map((message, index) => (
              <li
                key={index}
                className="mb-2 p-3 rounded-md text-center transition-all duration-300 ease-in-out bg-black "
              >
                {message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Validparenthesis;
