"use client"
//Vendors
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"


const Navbar: React.FC = () => {
    // Estado para controlar la apertura del sidebar
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar el sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div>
            {/* Barra de navegación */}
            <ul className="fixed top-0 left-0 z-50 flex flex-col justify-between items-center gap-2 bg-white bg-opacity-5 backdrop-blur-[2.5px] rounded-md md:max-h-28  text-white
            sm:flex-row sm:gap-24 font-serif lg:gap-28 w-[100%]
            ">
                <div className="flex-shrink-0 hover:bg-white hover:bg-opacity-35 rounded-full transition-colors duration-500 ">
                    <Image src={"/assets/genetic.png"} alt="Gentic logo" height={110} width={110} className="hover:cursor-pointer
                    transform transition-transform duration-500 hover:scale-75
                    "
                    />
                </div>

                {/* Links del Navbar para pantallas grandes */}
                <div className="hidden md:flex md:gap-10 md:mr-8 text-2xl">
                    <Link href="/" className="navlink-gradient hover:navlink-gradient-hover"><li>Home</li></Link>
                    <Link href="/projects" className="navlink-gradient hover:navlink-gradient-hover"><li>Projects</li></Link>
                    <Link href="" className="navlink-gradient hover:navlink-gradient-hover"><li>Experience</li></Link>
                </div>

                {/* Ícono de menú hamburguesa para pantallas pequeñas */}
                <div className="md:hidden">
                    <button onClick={toggleSidebar}>
                        <svg className="w-8 h-8 text-white hover:text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </ul>
            <div className="mt-44"></div>
            {/* Sidebar para pantallas pequeñas */}
            <div className={`fixed top-0 right-0 w-64 h-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <button className="absolute top-4 right-4 text-white" onClick={toggleSidebar}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="flex flex-col gap-8 mt-20 ml-6 text-white text-lg">
                    <Link href="/" className="hover:text-cyan-900"><li onClick={toggleSidebar}>Home</li></Link>
                    <Link href="/projects" className="hover:text-cyan-900"><li onClick={toggleSidebar}>Projects</li></Link>
                    <Link href="" className="hover:text-cyan-900"><li onClick={toggleSidebar}>Experience</li></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
