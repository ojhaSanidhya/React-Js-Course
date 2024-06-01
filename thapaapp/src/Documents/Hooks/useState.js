import React from 'react'
import "./style.css"

const useState = () => {
  const initialData = 21;
  const [myNum, setmyNum]= React.useState(initialData);
//   console.log(setmyNum);

const hello = (statVar) => {
    if(statVar>0){
        setmyNum(statVar-1);
    }
    else{
        setmyNum(0);
    }
}
  return (
    <>
        <div className='center_div'>
            <p>{myNum}</p>
            <div class = "button2" onClick={ () => setmyNum(myNum+1) }>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Increment
            </div>
            <div class = "button2" onClick={ () => {hello(myNum)} }> 
            {/* Basically hello fn use karke hum bata rhe hai ki value mera zero se decrement nahi hoga */}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Decrement
            </div>
        </div>
    </>
  )
}

export default useState