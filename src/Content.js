
import {FaTrashAlt} from "react-icons/fa"
import "./Content.css"
import { useState } from "react"




const Content=()=>{
    const [items, setItems]=useState([
        {
            id:1,
            checked:false,
            item:"One and half packet of milk"
        },
        {
            id:2,
            checked:true,
            item:"Unga ya ugali "
        },
        {
            id:3,
            checked:true,
            item:"Chapati"
        },
        
        {
            id:4,
            checked:false,
            item:"Lofa"
        },
        {
            id:5,
            checked:true,
            item:"Skuma wiki"
        },
        {
            id:6,
            checked:false,
            item:"Cabbage"
        },
        {
            id:7,
            checked:true,
            item:"One and half packet of rice"
        },
        
        
        {
            id:8,
            checked:true,
            item:"cooking oil"
        },
        
        
    ]);
     //     console.log(e.target.innerText)
     const handleCheck=(id)=>{
      const p=items.map(item=> item.id===id ?{...item,checked:!item.checked}:item);
      setItems(p)
      localStorage.setItem('shoppinglist',JSON.stringify(items));
          //   }
          }
          const Delete=(id)=>{
      const itemsdeleted=items.filter((item)=>item.id !== id)
      setItems(itemsdeleted)
      localStorage.setItem('shoppinglist',JSON.stringify(items))
      
          }
   
    
  
    // const [count, setCount]= useState(0)
    //      const HandleName=()=>{
    //     const names=["Kelvin","sharon","grace","Nathan","Mom","Dedi","Mulinge"]
    //     setCount(prevCount=>{
    //     return(
    //        prevCount +1
    //     )
           
    //     })
    //     const int=Math.floor(Math.random()*6)
    //     setName(names[int]);

    //   }
    //   const HandleClick=()=>{
    //     console.log("clicked")
    //   }
    //   const HandleClick2=(name)=>{
    //     console.log(`${name} was clicked`)
    //   }
    //   const HandleClick3=(e)=>{
   
    
    return(
        
<main>
{items.length ? (      
        <ul>
            {items.map(item=>(
                <li className="item" key={item.id}> 
                <input classname="inputs" onChange={()=>handleCheck(item.id)} type="checkbox" checked={item.checked}></input>
                <label 
style={(item.checked)? {textDecoration : "line-through"}: null}
                onDoubleClick={()=>handleCheck(item.id)}
                className="labels">{item.item}</label>
                <FaTrashAlt className="Trash" onClick={()=>Delete(item.id)}
                role="button" tabIndex="0" />
            </li>
            ))}


    </ul>):<p style={{marginTop:'2rem'}}>List empty</p>} 


      
                
 
</main>
    )
}
export default Content;
