//Vendors
import Link from "next/link"



const Navbar: React.FC = () => {

    return (
        <div className="">
            <ul className="bg-white bg-opacity-30 backdrop-blur-lg m-2 p-4 rounded-md flex gap-10 justify-center items-center h-20 text-lg text-slate-800">
                <Link href="" className="hover:underline underline-offset-4"><li>Home</li></Link>
                <Link href=""><li>About Me</li></Link>
                <Link href=""><li>Experience</li></Link>
            </ul>

        </div>
    )
}

export default Navbar