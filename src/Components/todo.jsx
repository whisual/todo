import React,{useState} from 'react'

const todo = () => {
    const [ipText, setIptext] = useState('')
    const [item, setItem] = useState([])

    // Add item

    const add = () =>{
        if(!ipText){

        }
        else{
            setItem([...item, ipText])
            setIptext('')
        }
        }

        // Delete Item

        const del = (id) =>{
         const updatedItems = item.filter((elem, ind) =>{
            return ind !== id;
         })
         setItem(updatedItems);
        }
  return (
   <>
   <h1>Todo App</h1>
   <input type="text" placeholder='Enter Text Here ✍' value={ipText} onChange={(e)=>{
    setIptext(e.target.value)
   }}/>
   <button onClick={add} title='Add'>Add</button>
   <div>
   {
    item.map((elem, ind)=>{
        return(
            <div key={ind}>
               <h3>{elem}<span><button onClick={()=>del(ind)} title='Delete'>🗑</button></span></h3>
            </div>  
        )
    })
   }
   </div>
  
   
   </>
  )
}

export default todo
