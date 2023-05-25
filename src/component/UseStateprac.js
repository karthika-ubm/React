import React,{useState} from 'react';


const UseStateprac = () => {
  const [first, setfirst] = useState(0);


const Inc=() => {
setfirst(first + 1);
};
const Dec=() => {
setfirst(first - 1);
};

  return (
    <>
    <h1>{first}</h1>
<button onClick={Inc}> + Increment +</button>
<button onClick={Dec}> -  Decrement  -  </button>

    </>

  )
}

export default UseStateprac