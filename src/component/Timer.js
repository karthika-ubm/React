import React, {useState} from 'react'

const Timer = () => {

    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    const [ori, updateone] = useState(time);
    const [ori1, updateone1] = useState(date);

    const updateTime= ()=>{
       let time = new Date().toLocaleTimeString();
        updateone(time)
}
    const updateDate= ()=>{
       let date= new Date().toLocaleDateString();
        updateone1(date);
}

  setInterval(updateTime,0);
  setInterval(updateDate,0);


  return (
    <>
    <br/><hr/>
    <h1>{ori}</h1>
    <h1>{ori1}</h1>
    </>

  )
}

export default Timer