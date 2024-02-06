import React, { useRef } from "react";
import Input from "./Input";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  

  const handleSave = (event) => {
    event.preventDefault();
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const eneteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: eneteredDueDate,
    });
  };


  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950 ">Cancel</button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}
        >
          Save
        </button>
      </menu>
      <div>
        <Input ref={title} label="title" />
        <Input ref={description} label="description" textarea={true} />
        <Input type="date" ref={dueDate} label="Due date" />
      </div>
    </div>
  );
};

export default NewProject;
