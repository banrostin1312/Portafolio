
//interface
import { IProject } from "@/src/interfaces/project"
//Vendors
import Image from "next/image"

interface ProjectProps {
    project: IProject
}

const Project: React.FC<ProjectProps> = ({ project }) => {

    const { nombre, descripcion, front, back, basededatos, repositorio, image } = project;

    return (
        <div className=" bg-black bg-opacity-65 rounded-lg shadow-lg p-6 w-[90%] text-white space-y-4 text-center">
            <h2 className="text-2xl">{nombre}</h2>
           
           <div className="flex justify-center">
           <Image src={image} alt={nombre} height={700} width={600} className="rounded-lg"/>
           
           </div>
            <p className="text-white text-xl break-words">{descripcion}</p>
            <p className="break-words"><strong>FrontEnd:</strong> {front}</p>
            <p className="break-words"><strong>BackEnd:</strong>{back}</p>
            <p className="break-words"><strong>DataBase:</strong> {basededatos}</p>
            <p className="break-words"><a href={repositorio} className="repolink p-4 rounded-lg" target="_blank">View Repositorie</a></p>
        </div>
    )
}

export default Project