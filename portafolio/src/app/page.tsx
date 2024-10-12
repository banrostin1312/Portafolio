//vendors
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center bg-white bg-opacity-5 backdrop-blur-lg w-[100%] rounded-xl md:mt-0 mt-64 mb-12">
          <h1 className="text-3xl whitespace-nowrap text-white p-5 text-center">About Me</h1>
          <p className="text-white text-left p-3 leading-loose text-lg max-w-4xl">
          Mi nombre es Andres Rodriguez, soy un desarrollador Full Stack Web apasionado por crear soluciones tecnológicas innovadoras y funcionales. Mi propuesta de valor radica en mi capacidad para abordar proyectos desde una perspectiva integral, combinando el desarrollo frontend y backend para construir aplicaciones escalables y de alto rendimiento. Recientemente, finalicé un bootcamp intensivo donde consolidé mis habilidades en tecnologías modernas como React, Next.js, Express, TypeScript, y MongoDB.
            <br /><br />
            A lo largo de un 1 año y 8 meses de experiencia, he trabajado tanto en proyectos individuales como colaborativos. Mi enfoque en la resolución de problemas me ha permitido participar en el desarrollo de diversas aplicaciones, desde un gestor de turnos y una página de películas consumiendo APIs, hasta un Ecommerce y una plataforma personalizada para la gestión de eventos de un chef. Estos proyectos han sido fundamentales para perfeccionar mis competencias en integración de APIs, diseño de bases de datos, y despliegue en la nube.
            <br /><br />
            Estoy especialmente interesado en seguir aprendiendo y aplicar mis conocimientos en proyectos desafiantes que me permitan crecer como profesional. Disfruto colaborar en equipos dinámicos donde la creatividad y la eficiencia son claves para el éxito.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center bg-black bg-opacity-65 w-[100%] rounded-xl md:mt-0">
          <h1 className="text-3xl whitespace-nowrap text-white p-5 text-center mb-2">Tech Stack</h1>

          <ul className="flex flex-wrap text-white gap-10 justify-center items-center text-center text-xl p-9">
            <div className="space-y-2">
              <h1>React</h1>
              <li><Image src={"/assets/react-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-2">
              <h1>JavaScript</h1>
              <li> <Image src={"/assets/js-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            " /></li>
            </div>
            <div className="space-y-2">
              <h1>TypeScript</h1>
              <li><Image src={"/assets/typescript-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-2">
              <h1>CSS</h1>
              <li><Image src={"/assets/css-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>NextJs</h1>
              <li><Image src={"/assets/next-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>Express</h1>
              <li><Image src={"/assets/express-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>Node</h1>
              <li><Image src={"/assets/node-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>HTML</h1>
              <li><Image src={"/assets/html-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>TailWind</h1>
              <li><Image src={"/assets/tailwind-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="w-full border-b-2 border-x-cyan-50 opacity-75"></div>
          </ul>

         <div className="flex flex-col md:flex-row justify-around w-full">
         <div className="flex flex-col items-center">
         <h1 className="text-3xl whitespace-nowrap text-white p-5 text-center mb-2">Deployment Platforms</h1>
          <ul className="flex flex-wrap text-white gap-10 justify-center items-center text-center text-xl p-9">
            <div className="space-y-4">
              <h1>Vercel</h1>
              <li><Image src={"/assets/vercel-icon2.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>Render</h1>
              <li><Image src={"/assets/render-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
          </ul>
         </div>
         <div className="flex flex-col items-center">
         <h1 className="text-3xl whitespace-nowrap text-white p-5 text-center mb-2">Database</h1>
          <ul className="flex flex-wrap text-white gap-10 justify-center items-center text-center text-xl p-9">
            <div className="space-y-4">
              <h1>PostgresSQL</h1>
              <li><Image src={"/assets/postgres-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>MongoDB</h1>
              <li><Image src={"/assets/mongo-icon.png"} alt="" width={120} height={120} className="
            transform transition-transform duration-300 hover:scale-125 max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
          </ul>
         </div>
         </div>

        </div>
      </section>
    </div>
  );
}

