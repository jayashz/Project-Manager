import React, { useState } from 'react'

const NewTask = ({onAdd}) => {
  const [enteredTask,setEnteredTasks] = useState();
  const handleChange=(event)=>{
    setEnteredTasks(event.target.value);
  };
  const handleAdd=()=>{
    onAdd(enteredTask);
    setEnteredTasks('');
  };
  return (
    <div className='flex item-center gap-4'>
        <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleChange} />
        <button className='text-stone-700 hover:text-stone-900' onClick={handleAdd}>Add task</button>
    </div>
  )
}

export default NewTask