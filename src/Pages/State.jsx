import React, { useEffect, useState } from "react";

const State = () => {
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);

  useEffect(() => {
    console.log("State changed:", data);
  }, [data]);

  const handleIncrement = () => {
    setData((previousData) => previousData + 1);
  };

  const handleDecrement = () => {
    setData1((previousData) => previousData - 1);
  };

  return (
    <div className="p-10">
      <p className="text-7xl">{data}</p>

      <button
        onClick={handleIncrement}
        className="w-28 h-10 bg-red-400 rounded-lg mt-4"
      >
        Increment
      </button>

      <div className="mt-10">
        <p className="text-7xl">{data1}</p>

        <button
          onClick={handleDecrement}
          className="w-28 h-10 bg-red-400 rounded-lg mt-4"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default State;