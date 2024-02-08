import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoNewProject from "./components/NoNewProject";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  const handlerSelectedProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject],
      };
    });
  }
  const handleCancelAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };
  const selectedProject = projectState.project.find(project=> project.id===projectState.selectedProjectId);

  let content =<SelectedProject project={selectedProject} />;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoNewProject onAddProject={handleStartAddProject} />;
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onAddProject={handleStartAddProject}
        projects={projectState.project}
        onSelectProject={handlerSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
