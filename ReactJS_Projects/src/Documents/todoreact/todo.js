import React, { useState, useEffect } from "react";
import "./style.css";

//This fn tells how we getting the data which is saved in our local storage.
//For getting the data we simple pass the key in the localStorage.getItem("key Name")
//Now this data comes in the format of string so we have to make it in it's original format, so we use JSON.parse()
// Ater that return this value.
const getLocalData = () => {
  return JSON.parse(localStorage.getItem("mytodolist"));
};

const Todo = () => {
  const [inputData, setinputData] = useState("");
  const [items, setitems] = useState(getLocalData()); // we put "getLocalData()" in the place of initial data so whatever value comes in the fn it directle set to stateVar (items).
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  const addItems = () => {
    if (!inputData) {
      // console.log("hii");
      alert("Plz put the data");
    } 
    else if(inputData && toggleButton){
      const object = items.map( (curElem) => {
        if(curElem.id === isEditItem){
          return {
            ...curElem, name: inputData, 
          }
        }
        return curElem;
        
      } )
      setitems(object);
      setToggleButton(false);
      setIsEditItem(null);
      setinputData("");
      
    }
    
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(), // id: new Date().getTime().toString(), use for getting unique id
        name: inputData,
      };
      setitems([...items, myNewInputData]); // ...items = storing the value, myNewInputData = adding the new value
      setinputData("");
    }
  };

  const editItem = (index) => {
    // If we use filter method, Basically filter returns all values in an array so we have to take the index also 
    //   const mtc = items.filter( (curElem) => {
    //       return curElem.id === index;
    //   } )
    //   setIsEditItem(index);
    //   // setinputData(mtc[0].name);  <--
    //   setToggleButton(true);
    // }

    // If we use find method, basically find returns only First value directly which simplifies our code.
    const mtc = items.find((curElem) => {
      return curElem.id === index;
    });
    setIsEditItem(index);
    setinputData(mtc.name);
    setToggleButton(true);
  };

  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id != index; // Jiska bhi id index se match hota hai usko show nahi karna hai
    });
    setitems(updatedItem);
  };

  const RemoveAll = () => {
    setitems([]);
    // Yaha basically "setitems" ki value hum empty array pass kar rhe jisse mera "items" ki value bhi empty array ho ja rhi, jisse kuch bhi nahi dikh rha.
  };

  //all data saved into local storage automatically that's why we use useEffect
  //localstorage humesha string value he accept karta hai. GET karne ka method upar hai.
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items)); //For setting the local storage we use localStorage.setItem("key", "Jaha ka value store karana (value")
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/groceries2.svg" alt="todologo" />
            <figcaption>ADD GROCERIES ITEMS</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items" // for emoji - windows + (.)
              className="form-control"
              value={inputData}
              onChange={(event) => setinputData(event.target.value)}
              // user jo bhi type karega wo (event.target.value) mei jayega, aur q ki wo setinputData se link hai to mera inputData mei value chal jayegi.
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItems}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            )}
            {/* <i className="fa fa-plus add-btn" onClick={addItems}></i> */}
          </div>
          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}
                    ></i>
                    <i
                      className="fa fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={RemoveAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
