import {useState} from 'react';
import "./App.css";

function App() {

  const [count,setCount]=useState(0);
  function startHandler(){
    setCount(count);

  }

  function incHandler(){
    
    setCount(count+1);
  }

  function decHandler(){
    
    setCount(count-1);
  }
  return (
   <div className="wrapper flex justify-center max-w-[100vw] min-h-[100vh] bg-cyan-900  items-center gap-20  bg-sky-950 flex-col">
    <div className="incDec text-3xl font-sarif">
      Increment & Decrement
    </div>
    <div className="flex gap-x-20 bg-white rounded-md ">
      <button className="dec text-center border-r-2 py-3 px-5 text-4xl font-semibold" onClick={decHandler}>-</button>
      <div className="count py-3 px-5 text-center  text-4xl font-semibold"></div>
      <button className="inc  border-l-2 py-2 px-5 text-4xl font-semibold" onClick={incHandler}>+</button>
    </div>
    <button className="StartBtn rounded-md py-3 px-5 bg-sky-600 text-white  text-lg" onClick={startHandler}>Start</button>
   </div>
  );
}

export default App;
