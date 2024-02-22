import React ,{useState}from 'react';
const Use=()=>{
const [state,setState]=useState(0)
function changeState(){
    setState(prevState=prevState+1)
}
return (
    <div>
        <button onClick="changeState">Change State</button>
        <p>{state}</p>
    </div>
)
}
export default Use;