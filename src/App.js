import './App.css';
import {useState} from "react";
import List from './List';
function App() {
  const [currenItem,setCurrentItem]=useState(null);
  const [itemList,updateItemList]=useState([]);
  const onChangeHandler = (e) =>{
    console.log("current value",e.target.value);
    setCurrentItem(e.target.value);
  };
  const addItemList=()=>{
    updateItemList([...itemList, {item :currenItem,key:Date.now()}]);
    setCurrentItem("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="Input-wrapper">
            <input placeholder='Add Item' value={currenItem} onChange={onChangeHandler}/>
            <button onClick={addItemList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
