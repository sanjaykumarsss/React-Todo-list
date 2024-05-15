import React, { useState } from 'react';
import './Todolist.css'

export default function Todolist() {
    const [task, settask] = useState([]);
    const [newtask, setnewtask] = useState("");


    const handleinputchange = (event) => {
        setnewtask(event.target.value);

    }

    const addtask = () => {
        if (newtask.trim() !== "") {
            settask(t => [...t, newtask]);
            setnewtask("");
        }

    }

    const deletetask = (index) => {
        const updatedtask = task.filter((_, i) => i !== index);
        settask(updatedtask);

    }


    const movetaskup  =  (index) => {
        if (index > 0) {
            const updatedtask = [...task];
            [updatedtask[index], updatedtask[index - 1]] = [updatedtask[index - 1], updatedtask[index]];
            settask();
        }

    }

    const movetaskdown = (index) => {
        if (index < task.length - 1) {
            const updatedtask = [...task];
            [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index]];
            settask();
        }


    }
    return (
        <div className='To-do-list'>

            <h1 className='tag'>TO-DO-LIST</h1>
            <div className=''>
                <input
                    type='test'
                    placeholder='Enter a task......'
                    value={newtask}
                    onChange={handleinputchange}
                />
                <button className='add-button'
                    onClick={addtask}>
                    add

                </button>

            </div>



            <ol>
                {task.map((task, index) =>(
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={ () => deletetask (index)}>delete</button>
                           <button className='move-button'
                            onClick={()=> movetaskup(index)}>  👍 </button>

                            <button className='move-button'
                            onClick={()=>movetaskdown(index)}> 👎</button>
                    </li>
                     ))};
               </ol> 



     
        </div >
    )
}










