import React, { useState } from 'react'

const NewTask = ({onAdd}) => {
  const [enteredTask,setEnteredTasks] = useState('');
  const handleChange=(event)=>{
    setEnteredTasks(event.target.value);
  };
  const handleAdd=()=>{
    if(enteredTask.trim() !== ''){

      onAdd(enteredTask);
    }
    setEnteredTasks('');
  };
  return (
    <div className='flex item-center gap-4'>
        <input type='text' className='w-64 px-2 py-1 bg-stone-200 rounded-lg border-[#BBC3A4] border-2' onChange={handleChange} value={enteredTask} placeholder='Enter your tasks' />
        <button className='text-stone-700 bg-[#BBC3A4] p-3 rounded-lg hover:text-stone-900' onClick={handleAdd}>Add task</button>
    </div>
  )
}

export default NewTask