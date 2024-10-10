//Components
import Navbar from "../components/navbar/Navbar";
//vendors
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center bg-white bg-opacity-5 backdrop-blur-lg w-[90%] m-10 p-4 rounded-xl md:mt-0 mt-64">
          <h1 className="text-2xl whitespace-nowrap text-white p-5 text-center">About Me</h1>
          <p className="text-white text-left p-3 leading-loose text-lg max-w-4xl">
            Soy un desarrollador Full Stack Web apasionado por crear soluciones tecnológicas innovadoras y funcionales. Mi propuesta de valor radica en mi capacidad para abordar proyectos desde una perspectiva integral, combinando el desarrollo frontend y backend para construir aplicaciones escalables y de alto rendimiento. Recientemente, finalicé un bootcamp intensivo donde consolidé mis habilidades en tecnologías modernas como React, Next.js, Express, TypeScript, y MongoDB.
            <br /><br />
            A lo largo de un año de experiencia, he trabajado tanto en proyectos individuales como colaborativos. Mi enfoque en la resolución de problemas me ha permitido participar en el desarrollo de diversas aplicaciones, desde un gestor de turnos y una página de películas consumiendo APIs, hasta un Ecommerce y una plataforma personalizada para la gestión de eventos de un chef. Estos proyectos han sido fundamentales para perfeccionar mis competencias en integración de APIs, diseño de bases de datos, y despliegue en la nube.
            <br /><br />
            Estoy especialmente interesado en seguir aprendiendo y aplicar mis conocimientos en proyectos desafiantes que me permitan crecer como profesional. Disfruto colaborar en equipos dinámicos donde la creatividad y la eficiencia son claves para el éxito.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center bg-black bg-opacity-40 w-[100%] rounded-xl md:mt-0 mt-64 ">
          <h1 className="text-2xl whitespace-nowrap text-white p-5 text-center mb-10">Tech Stack</h1>
       
        <ul className="flex flex-row text-white gap-10 justify-center items-center text-center text-2xl">
          <li>React<Image src={"/assets/react-icon.png"} alt="" width={175} height={175}/></li>
          <li>React<Image src={"/assets/react-icon.png"} alt="" width={175} height={175}/></li>          <li></li>
          <li></li>
         </ul>
        
        </div>
      </section>
    </div>
  );
}

