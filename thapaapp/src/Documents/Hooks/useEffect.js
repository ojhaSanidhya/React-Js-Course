import React , {useEffect, useState} from 'react'
import "./style.css"

const useEffects = () => {
    const initialData = 21;
    const [myNum, setmyNum]= useState(initialData);

    // useEffect ko call karne ke tarika
    useEffect(() => {
        console.log("hii")
        document.title = `Chats(${myNum})`;
    }, [])
    // ye use hota hai jaise agar user website pe aaya aur humko kuch popup ya fhir koi msg show karwana hai bina koi button click kiye
    // [] this is called dependency jo sirf mere useEffect ko website oprning time he run karwati hai uske baad nahi

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
            </div>
        </>
      )
}

export default useEffects;