import React, { useState } from "react"
import "./404.scss"

const Error = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        setCount
          </button>
      <button onClick={handleClick}>
        Delay setCount
          </button>
    </div>
  );
}

export default Error