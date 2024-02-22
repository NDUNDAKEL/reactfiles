import React ,{useState}from 'react';
const Use=()=>{
const [state,setState]=useState(0)
function changeState(){
    setState(state=state+1)
}
return (
    <div>
        <button onclick="changeState">Change State</button>
    </div>
)
}
export default Index;