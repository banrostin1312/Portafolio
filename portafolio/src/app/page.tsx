//vendors
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center bg-white bg-opacity-5 backdrop-blur-lg w-[100%] rounded-xl md:mt-0 mt-64 mb-12">
          <h1 className="text-3xl whitespace-nowrap text-white p-5 text-center">About Me</h1>
          <p className="text-xl  text-white p-5 text-center">(Cuento con nacionalidad española, estare viviendo en madrid en enero.)</p>

          <p className="text-white text-left p-3 leading-loose text-base md:text-lg max-w-4xl">
            Mi nombre es Andres Rodriguez tengo 25 años, soy un desarrollador Full Stack Web apasionado por crear soluciones tecnológicas innovadoras y funcionales. Mi propuesta de valor radica en mi capacidad para abordar proyectos desde una perspectiva integral, combinando el desarrollo frontend y backend para construir aplicaciones escalables y de alto rendimiento. Recientemente, finalicé un bootcamp intensivo donde consolidé mis habilidades en tecnologías modernas como React, Next.js, Express, TypeScript, y MongoDB.
            <br /><br />
            A lo largo de un 1 año y 8 meses de experiencia, he trabajado tanto en proyectos individuales como colaborativos. Mi enfoque en la resolución de problemas me ha permitido participar en el desarrollo de diversas aplicaciones, desde un gestor de turnos y una página de películas consumiendo APIs, hasta un Ecommerce y una plataforma personalizada para la gestión de eventos de un chef. Estos proyectos han sido fundamentales para perfeccionar mis competencias en integración de APIs, diseño de bases de datos, y despliegue en la nube.
            <br /><br />
            Estoy especialmente interesado en seguir aprendiendo y aplicar mis conocimientos en proyectos desafiantes que me permitan crecer como profesional. Disfruto colaborar en equipos dinámicos donde la creatividad y la eficiencia son claves para el éxito.
          </p>
          <div className="flex flex-col mb-11 gap-20 text-xl text-white md:flex-row ">

            <div className="flex flex-col">
              <h1 className="text-3xl  text-white p-5 text-center">CV</h1>

              <div className="flex flex-row justify-center gap-8">
                <div className="flex flex-col items-center space-y-4">
                  <h1>Español</h1>
                  <a href="/assets/Cv-Andres-Rodriguez-Jimenez-E.pdf"
                    target="_blanked"
                  ><Image src={"/assets/pdf-icon.png"} alt="icon pdf" height={90} width={90}
                    className="transform transition-transform duration-300 hover:translate-y-[-10px]"
                    /></a>
                </div>

                <div className="flex flex-col items-center space-y-4 ">
                  <h1>Ingles</h1>
                  <a href="/assets/Cv-Andres-Rodriguez-Jimenez-I.pdf"
                    target="_blanked"
                  ><Image src={"/assets/pdf-icon.png"} alt="icon pdf" height={90} width={90}
                    className="transform transition-transform duration-300 hover:translate-y-[-10px]"
                    /></a>
                </div>
              </div>
            </div>


          </div>

        </div>

        <div>

        </div>
      </section>

      <section>
        <div className="flex flex-col items-center bg-black bg-opacity-65 max-w-full rounded-xl md:mt-0 ">
          <h1 className="text-3xl whitespace-nowrap text-white p-5 text-center mb-2">Tech Stack</h1>

          <ul className="flex flex-wrap text-white gap-10 justify-center items-center text-center text-xl p-9">
            <div className="space-y-2">
              <h1>React</h1>
              <li><Image src={"/assets/react-icon.png"} alt="reac icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-2">
              <h1>JavaScript</h1>
              <li> <Image src={"/assets/js-icon.png"} alt="java icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            " /></li>
            </div>
            <div className="space-y-2">
              <h1>TypeScript</h1>
              <li><Image src={"/assets/typescript-icon.png"} alt="types script icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-2">
              <h1>CSS .</h1>
              <li><Image src={"/assets/css-icon.png"} alt="CSS Icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>NextJs</h1>
              <li><Image src={"/assets/next-icon.png"} alt="nextjs icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>Express</h1>
              <li><Image src={"/assets/express-icon.png"} alt="express icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>Node</h1>
              <li><Image src={"/assets/node-icon.png"} alt="node icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>HTML</h1>
              <li><Image src={"/assets/html-icon.png"} alt="html icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
            <div className="space-y-4">
              <h1>TailWind</h1>
              <li><Image src={"/assets/tailwind-icon.png"} alt="tailwind icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
            </div>
          </ul>

          <div className="flex flex-col md:flex-row justify-around w-full">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl text-white p-5 text-center mb-2 ">Deployment Platforms</h1>
              <ul className="flex flex-wrap text-white gap-10 justify-center items-center text-center text-xl p-9">
                <div className="space-y-4">
                  <h1>Vercel</h1>
                  <li><Image src={"/assets/vercel-icon2.png"} alt="vercel icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
                </div>
                <div className="space-y-4">
                  <h1>Render</h1>
                  <li><Image src={"/assets/render-icon.png"} alt="render icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
                </div>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-3xl whitespace-nowrap text-white p-5 text-center mb-2">Database</h1>
              <ul className="flex flex-wrap text-white gap-10 justify-center items-center text-center text-xl p-9">
                <div className="space-y-4">
                  <h1>PostgresSQL</h1>
                  <li><Image src={"/assets/postgres-icon.png"} alt="postgres icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
                </div>
                <div className="space-y-4">
                  <h1>MongoDB</h1>
                  <li><Image src={"/assets/mongo-icon.png"} alt="mongo icon" width={120} height={120} className="
            transform transition-transform duration-300 hover:translate-y-[-10px] max-w-[100px] sm:max-w-[120px]
            "/></li>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-full border-b-2 border-x-cyan-50 opacity-75"></div>

          <h1 className="text-3xl whitespace-nowrap text-white p-5 text-center mb-2">Certifications</h1>

          <div className="flex flex-col gap-10 md:flex-row text-white text-xl mb-8">

            <div className="flex flex-col items-center space-y-6">
              <h1>Henry Full Stack Developer</h1>
              <Image src="/assets/certificado-henry.png" alt="henry certification" height={400} width={350}
                className="hover:scale-110 transform transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col items-center space-y-6">
              <h1>EF SET Certification</h1>
              <Image src="/assets/certificado-ingles.png" alt="EF SET certification" height={400} width={350}
                className="hover:scale-110 transform transition-transform duration-300"

              />
            </div>

            <div className="flex flex-col items-center space-y-6">
              <h1>GAC Certification</h1>
              <Image src="/assets/certificado-gac.jpeg" alt="GAC certification" height={400} width={350}
                className="hover:scale-110 transform transition-transform duration-300"

              />
            </div>

          </div>
          <div className="w-full border-b-2 border-x-cyan-50 opacity-75"></div>

          <div className="flex flex-col text-center text-white space-y-4 p-3 ">
            <h2 className="text-3xl mt-2">Contact me</h2>

            <div className="flex flex-row gap-2 justify-center items-center">
              <Image src="/assets/github-icon.png" alt="github icon" height={40} width={40} />
              <a href="https://github.com/banrostin1312"
                className="hover:underline hover:scale-105 transform transition-transform duration-300"
                target="_blanked"

              >GitHub</a>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
              <Image src="/assets/linkedin-icon.png" alt="linkedIn icon" height={40} width={40} />
              <a href="https://www.linkedin.com/in/andres-rodriguez-jimenez-51b41a325/"
                className="hover:underline hover:scale-105 transform transition-transform duration-300"
                target="_blanked"
              >LinkedIn</a>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
              <Image src="/assets/email-icon.png" alt="email icon" height={40} width={40} />
              <p className="break-all">arodriguezjimenez60@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

