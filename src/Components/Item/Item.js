import React, { useState } from 'react'


// function Item(props) {
function Item ({ Allitems ,  handleClick , e , index}) {
// function Item ({ Done , handleClick, handleDone , e , index}) {
    


const[Done, setDone] = useState(false)

const handleDone = (e, index)=>{

    // console.log('handleDone index:' , index)
    let handleDoneIndex = index;
    // console.log(handleDoneIndex);


    Allitems.filter((c, index)=>{
        // console.log(c)
        // console.log(index)

        let dddIndex = index;
        // console.log(dddIndex);

        // handleDoneIndex === dddIndex ? console.log("true") : console.log("false")
      
        return(
        handleDoneIndex === dddIndex ? setDone(!Done) : ""
        )
    })
   
}

  return (
  
    <li key={Math.random()} >

        <span className={`${ Done ? "text-decoration-line-through" : "text-decoration-none"}`}> {e.name }  {e.age }   </span>

        <small onClick={(e)=>handleClick(e , index)}  style={{color: "red" , fontWeight: "bold" , cursor:"pointer"}}>&times;</small>

        <small onClick={(e)=>handleDone(e , index)} style={{cursor:"pointer"}}>done</small>

    </li>

  )
}

export default Item