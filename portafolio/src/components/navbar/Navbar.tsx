//Vendors
import Link from "next/link"
import Image from "next/image"


const Navbar: React.FC = () => {

    return (
        <div className="">
            <title>Home</title>
            <ul className="flex flex-col justify-between items-center gap-2 bg-white bg-opacity-20 backdrop-blur-lg m-10 p-4 rounded-md md:max-h-20 text-lg text-white
            sm:flex-row sm:gap-24 font-serif lg:gap-28
            ">
                <div className="flex-shrink-0">
                    <Image src={"/assets/genetic.png"} alt="Gentic logo" height={120} width={120}
                        className="hover:cursor-pointer"
                    />
                </div>
                <div className="flex md:gap-16 md:mr-8">
                    <Link href="/" className="hover:text-neon-blue"><li>Home</li></Link>
                    <Link href="/projects" className="hover:text-neon-blue"><li>Projects</li></Link>
                    <Link href="" className="hover:text-neon-blue"><li>Experience</li></Link>
                </div>
            </ul>

        </div>
    )
}

export default Navbar