import React, { useReducer } from 'react'
import "./style.css"


const Reducer = (state, action) => {
    if(action.type === "Increment"){
        return state = state+1;
    }
    if(state>0 && action.type === "Decrement"){
        return state = state-1;
    }
    return 0;
}

const UseReducer = () => {
    const initialData = 21;

    const [State, Dispatch] = useReducer(Reducer, initialData)
    // State = initialData, Reducer is use as updateFn, by the help of dispatch we can trigger the reducer 
    // Basically dispatch tells what to do and how to do is written in reducer.
    // useState use in small project and useReducer use in big project.
    

  return (
    <>
        <div className='center_div'>
            <p>{State}</p>
            <div class = "button2" onClick={ () => Dispatch({ type:"Increment" }) }>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Increment
            </div>
            <div class = "button2" onClick={ () => Dispatch({ type:"Decrement" }) }> 
            
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

export default UseReducer