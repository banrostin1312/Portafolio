"use client"
//Vendors
import Image from "next/image"
import { useEffect, useState } from "react"

const RocketUp = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const toogleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsRotating(true)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    setTimeout(() => {
      setIsRotating(false);
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener("scroll", toogleVisibility);
    return () => {
      window.removeEventListener("scroll", toogleVisibility)
    }

  }, [])


  return (
    <div>
      {isVisible &&
        <div onClick={scrollToTop} className="fixed bottom-8 right-8 bg-white bg-opacity-45 backdrop-blur-lg p-3 rounded-full cursor-pointer
      hover:bg-opacity-25 hover:scale-90 transition-transform duration-300
      ">
          <Image src={"/assets/up-chevron.png"} alt="go to top" height={40} width={40}
            className={`hover:scale-90 transition-transform duration-300 ${isRotating ? 'rotate':''}`}
          />
        </div>
      }
    </div>
  )
}

export default RocketUp