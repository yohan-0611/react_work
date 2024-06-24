import React, { useState, useEffect} from "react";
import Clock from "./Clock";
import Gallary from "./Gallery";

function useTime(){
  const[time,setTime] = useState(() => new Date());

  useEffect(()=>{
    const id = setInterval(() =>{
      setTime(new Date());
    },1000);
    return ()=>clearInterval(id);
    },[])
    return time;
}

export default function App(){

  const time = useTime();

  const[color, setColor] = useState('lightcoral');

  return(

    <div>
      <p>
        원하는 컬러 선택하세요 : {' '}

        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value='lightcoral'>lightcoral</option>
          <option value='midnightblue'>midnightblue</option>
          <option value='purple'>purple</option>
        </select>
      </p>

      <Clock
        time={time.toLocaleTimeString()}
        color={color}
      />

      <Gallary/>

    </div>
  );
}

