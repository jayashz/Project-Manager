import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoNewProject from "./components/NoNewProject";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  function handleStartAddProject(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId : null,
      }
    });
  };
  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const newProject={
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProjectId:undefined,
        project: [...prevState.project,newProject]
      }
    });
  };

  let content;

  if(projectState.selectedProjectId===null){
    content = <NewProject onAdd={handleAddProject}/>;
  }
  else if (projectState.selectedProjectId === undefined){
    content = <NoNewProject onAddProject={handleStartAddProject}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onAddProject={handleStartAddProject} projects={projectState.project}/>
      {content}
    </main>
  );
}

export default App;
