//Components
import Navbar from "../components/navbar/Navbar";
//vendors
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        {/* <Image src={} height={} width={} alt=""></Image> */}
        <div>
          <h1 className="text-center text-2xl underline">About Me</h1>
          <p className="text-white text-left p-3 leading-loose">Soy un desarrollador Full Stack Web apasionado por crear soluciones tecnológicas innovadoras y funcionales. Mi propuesta de valor radica en mi capacidad para abordar proyectos desde una perspectiva integral, combinando el desarrollo frontend y backend para construir aplicaciones escalables y de alto rendimiento. Recientemente, finalicé un bootcamp intensivo donde consolidé mis habilidades en tecnologías modernas como React, Next.js, Express, TypeScript, y MongoDB.

            A lo largo de un año de experiencia, he trabajado tanto en proyectos individuales como colaborativos. Mi enfoque en la resolución de problemas me ha permitido participar en el desarrollo de diversas aplicaciones, desde un gestor de turnos y una página de películas consumiendo APIs, hasta un Ecommerce y una plataforma personalizada para la gestión de eventos de un chef. Estos proyectos han sido fundamentales para perfeccionar mis competencias en integración de APIs, diseño de bases de datos, y despliegue en la nube.

            Estoy especialmente interesado en seguir aprendiendo y aplicar mis conocimientos en proyectos desafiantes que me permitan crecer como profesional. Disfruto colaborar en equipos dinámicos donde la creatividad y la eficiencia son claves para el éxito.</p>
        </div>
      </section>
    </div>

  );
}
