//interface
import { IProject } from "@/src/interfaces/project"

interface ProjectProps {
    project: IProject
}

const Project: React.FC<ProjectProps> = ({ project }) => {

    const { nombre, descripcion, front, back, basededatos, repositorio } = project;

    return (
        <div className=" bg-black bg-opacity-65 rounded-lg shadow-lg p-6 w-[90%] text-white space-y-4">
            <h2 className="text-2xl">{nombre}</h2>
            <p className="text-gray-200">{descripcion}</p>
            <p>Front: {front}</p>
            <p>Back: {back}</p>
            <p>BaseDeDatos: {basededatos}</p>
            <p><a href={repositorio} className="repolink p-4">View Repositorie</a></p>
        </div>
    )
}

export default Project