import React, { useState, useCallback } from "react";
// import User from './User';
import Header from "./Header";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  // const [name,setName]=useState("Nicat");
  console.log("Counter componenet re-render");

  // const userData=useMemo(()=>{
  //     return{
  //         id:1,
  //         name
  //     }
  // },[name])

  const increment = useCallback(() => {
    setCount((prev) => prev + amount);
  }, [amount]);

  return (
    <div>
      <Header increment={increment} />
      {/* <User data={userData}/> */}

      <hr />

      <h2>{count}</h2>
      <button onClick={increment}>Arttir</button>

      <hr />

      <div>
        Amount + {amount}
      </div>

      <button onClick={()=>setAmount(1)}>+1</button>
      <button onClick={()=>setAmount(3)}>+3</button>
      <button onClick={()=>setAmount(5)}>+5</button>
      {/* <button onClick={()=>setName(name==="Nicat" ? "Laman" : "Nicat")}>Set Name</button> */}
    </div>
  );
};

export default Counter;
