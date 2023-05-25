import React from 'react';
import DateTime from './component/DateTime';
import Greetings from './component/Greetings';
import { add, multi, div, sub } from './component/Calculator';
import NetflixSeries from './component/Netflix/NetflixSeries';
import Nsdata from './component/Netflix/Nsdata';
import Slot from './component/SlotMachineGame/Slot';
import UseState from './component/UseStateprac';
import Timer from './component/Timer';
import OnclickStateChange from './component/Practice/OnclickStateChange';
import BasicForm from './component/Form/BasicForm';
import LocationModal from './component/LocationModal';
import UseEffect1 from './component/UseEffect1';



const App = () => {

  return (
    <>
      <div className='bodymain'>
        <h1 >Welcome</h1><br /><br /><br /><hr />
        <h5>Date & Time</h5><br />
        <DateTime /><br /><br /><br /><hr />
        <h5>Greeetings based on Time</h5>
        <Greetings /><br /><br /><hr />
        <h5>Calculator</h5><br /><br /><br />
        <h3>Addition of {add(6, 9)} </h3>
        <h3>Subtraction of {sub(6, 9)} </h3>
        <h3>Divition of {div(6, 9)} </h3>
        <h3>Multiplication of {multi(6, 9)} </h3> <br /><br />

        <h4>Netflix Series</h4><br /><hr />
        {Nsdata.map((val) => {
          return (


            <NetflixSeries
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />

          )
        })
        }
      </div><br /><br /><hr />
      <Slot /><br /><br /><br /><br /><hr />
      <UseState /><br /><br />
      <Timer /><br /><br /><br /><br /><hr />
      <OnclickStateChange /><br /><br /><br /><br /><hr />
      <LocationModal /><br /><br /><br /><br /><hr />
      <BasicForm /><br /><br /><br /><br /><hr />

      <UseEffect1 />
    </>
  )
}

export default App