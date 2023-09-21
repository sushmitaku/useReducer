import "./styles.css";
import React ,{useReducer} from 'react';


const initialState={
count:0
}
const ACTIONS={
INCREMENT:"INCREMENT",
DECREMENT:"DECREMENT"
}
function reducer(state,action){
switch(action.type){
case ACTIONS.INCREMENT:
return {count:state.count+1}
case ACTIONS.DECREMENT:
return {count:state.count-1}
default: return state
}
}


export default function App() {
const [stateCount,dispatch]=useReducer(reducer,initialState)
const inrementHandler=()=>{
dispatch({
type:ACTIONS.INCREMENT
})
}
const decrementHandler=()=>{
dispatch({
type:ACTIONS.DECREMENT
})
}
return (
<div className="App">
<h1>{stateCount.count}</h1>
<button onClick={inrementHandler}>increment</button>
<button onClick={decrementHandler}>decremet</button>
</div>
);
}
