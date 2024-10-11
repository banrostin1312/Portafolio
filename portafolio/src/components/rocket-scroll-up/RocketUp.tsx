"use client"
//Vendors
import Image from "next/image"
import { useEffect, useState } from "react"

const RocketUp = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toogleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
  } 

  useEffect(() => {
    window.addEventListener("scroll", toogleVisibility);
    return () => {
      window.removeEventListener("scrol", toogleVisibility)
    }

  }, [])


  return (
    <div>
      {isVisible && 
      <div onClick={scrollToTop} className="fixed bottom-8 right-8 bg-white bg-opacity-45 backdrop-blur-sm p-3 rounded-full cursor-pointer
      hover:bg-opacity-25 hover:scale-90 transition-transform duration-300
      ">
        <Image src={"/assets/rocket-icon.png"} alt="go to top" height={50} width={50}
        className="hover:scale-90 transition-transform duration-300"
        />
      </div>
      }
    </div>
  )
}

export default RocketUp