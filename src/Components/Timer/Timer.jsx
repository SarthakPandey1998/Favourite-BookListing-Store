import { useEffect, useRef, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const[show,setShow] = useState(false);
    const timerRef = useRef(null);

    const formatTime = (secs) => {
        const hours = Math.floor(secs / 3600);
        const minutes = Math.floor((secs % 3600) / 60);
        const seconds = secs % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

       function handleRead(){
        if(!timerRef.current){
            timerRef.current = setInterval(() => {
                setSeconds(seconds => seconds + 1);
              }, 1000);
        }
        setShow(true);
       }

       function handlePause(){
            clearInterval(timerRef.current);
            timerRef.current = null;
       }

       useEffect(()=>{
        return()=>{
            if(timerRef.current){
                clearInterval(timerRef.current);
            }
            
        }
       },[])
    
    return (
        <div>
            <button className="btn btn-outline-success" onClick={handleRead}>Read</button>
            <button className="btn btn-outline-secondary mx-2" onClick={handlePause}>Pause</button>
            {show && <h4>{formatTime(seconds)}</h4>}
        </div>
    )
}

export default Timer;
