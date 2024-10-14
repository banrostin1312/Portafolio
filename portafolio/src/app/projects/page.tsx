//Helpers
import { projects } from "@/src/helpers/projects";
//Components
import Project from "@/src/components/project/Project";
//Interfaces
import { IProject } from "@/src/interfaces/project";


const Projects: React.FC = () => {
    return (
        <div className="grid grid-cols-1 space-y-8 justify-items-center pb-6">
          {projects.map((project:IProject,index:number)=>
          <Project project={project} key={index}/>
          )}
        </div>
    )
}

export default Projects;