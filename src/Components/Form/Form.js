import React, { useState } from 'react';
import Item from '../Item/Item'

function Form() {

const[User, setUser] = useState({
    name:"",
    age:"",
})
const[Allitems, setAllitems] = useState([])



const handleFormChange = (e) => {
    // console.log(e.target.name , e.target.value);

    switch(e.target.name){
       case "name":
        setUser({
            ...User,
            name:e.target.value,
        })
        break;

        case "age":
            setUser({
                ...User,
                age:e.target.value,
            })
        break;


        default:
        break;
    }
}

const formSubmit = (e) => {
    e.preventDefault();
    if(User.name.length === 0 || User.age.length === 0 ){
        return ""
    }else{
    // console.log("yyyy");
    // console.log(User);
    Allitems.push(User)
    setUser({
        ...User,
        Allitems
    })
    // console.log(Allitems);
    setUser({
        name:"",
        age:"",
    })
    // console.log(Allitems);
}
}




// const handleClick = (e , key) => {
//     const olla = key
//     console.log(olla)
//     console.log('key index:' , key);
// }


const handleClick = (e , index) => {
    e.preventDefault()
    // console.log('handleClick index:' , index)
    let handleClickIndex = index;
    // console.log(handleClickIndex);

    const ooo = Allitems.filter((c , index)=>{
        // console.log(c)
        // console.log(index)
        let oooIndex = index;
        // console.log(oooIndex);

        // handleClickIndex === oooIndex ? console.log("true") : console.log("false")
        return(
            handleClickIndex === oooIndex ? "" : c
        )
       
    })
    setAllitems(ooo)
}


  return (
    <div>
        <form onSubmit={formSubmit}>
            <div className='w-50 mx-auto my-5'>
                <input className='form-control mb-3'placeholder='Write Your Task' name='name' value={User.name} onChange={handleFormChange} />
                <input className='form-control mb-3' placeholder='Write Your Time' name='age' value={User.age} onChange={handleFormChange} />
                <button className='btn btn-primary w-100' >save</button>
            </div>
        </form>

        <div>
          <h1 className='Text-center'>Todo list</h1>
          {/* <ul className='mx-auto container w-50'> */}
          <ul className="w-50 mx-auto my-5 container">
            {Allitems.length  ?   Allitems.map(  (e, index)=>  
                <Item key={Math.random()} Allitems={Allitems} handleClick={handleClick}   e={e} index={index} /> )   : ""  
                // <Item Done={Done}  handleClick={handleClick(e, index)}  handleDone={handleDone} e={e} index={index} /> )   : ""  
            }
          </ul>
        </div>

    </div>
  )
}

export default Form