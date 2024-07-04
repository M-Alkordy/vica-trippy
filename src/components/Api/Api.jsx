import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Api() {
    const [data, setdata] = useState([]);
    const [title, settitle] = useState("");
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(res => setdata(res) )
        .catch(error => console.log(error))
/* 
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => setdata(res.data))
        .catch(error => console.log(error)) */
/* 
        axios.put("https://jsonplaceholder.typicode.com/todos" , {
            title : title
        })
        .then(res => console.log(res))
        .catch(error => console.log(error)) */
    }, []);

    const deleteItem = (id) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
        
    }
  return (
    <div>
        {
            data?.map((element , index)=>{
                return(
                    <div>
                        <span key={index}>{element?.title}</span>
                        <button onClick={()=>deleteItem(element.id)}>delete</button>
                    </div>
                )
            })
        }
{/*         <input type="text" placeholder="title" onChange={(event) => settitle(event.target.value)} /> */}
    </div>
  )
}
