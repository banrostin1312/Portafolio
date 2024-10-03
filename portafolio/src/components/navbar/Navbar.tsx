//Vendors
import Link from "next/link"



const Navbar: React.FC = () => {

    return (
        <div className="">
            <title>Home</title>
            <ul className="flex flex-col justify-center items-center gap-2 bg-white bg-opacity-20 backdrop-blur-lg m-4 p-4 rounded-md h-auto text-lg text-white
            sm:flex-row sm:gap-24 font-serif lg:gap-28
            ">
                <Link href="/" className="hover:text-neon-blue"><li>Home</li></Link>
                <Link href="/projects" className="hover:text-neon-blue"><li>Projects</li></Link>
                <Link href="" className="hover:text-neon-blue"><li>Experience</li></Link>
            </ul>

        </div>
    )
}

export default Navbar