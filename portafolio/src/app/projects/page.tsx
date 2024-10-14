"use client"
//Helpers
import { projects } from "@/src/helpers/projects";
//Components
import Project from "@/src/components/project/Project";
//Interfaces
import { IProject } from "@/src/interfaces/project";
//Vendors
import { motion } from "framer-motion"


const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 space-y-8 justify-items-center pb-6 overflow-x-hidden">
      {projects.map((project: IProject, index: number) =>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: 100 }} 
          transition={{ duration: 0.7 }} 
          className="grid justify-items-center"
        >
          <Project project={project} key={index} />
        </motion.div>
      )}
    </div>
  )
}

export default Projects;