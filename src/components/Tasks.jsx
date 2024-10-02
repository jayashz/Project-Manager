import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4 my-4">
          This project has no tasks yet!
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 my-7 rounded-lg bg-[#BBC3A4]">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 border-b-2 border-stone-500">
              <span>{task.text}</span>
              <button onClick={()=>onDelete(task.id)} className="text-stone-700 hover:text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      )}
      {tasks.length<0 && <ul>
        {tasks.map((task)=><li key={task.id}>{task.text}</li>)}
        </ul>}
    </section>
  );
};

export default Tasks;
