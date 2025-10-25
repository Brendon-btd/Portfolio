import React, {useEffect, useState} from 'react'

const Header = () => {
    const[isScrolled, setIsScrolled] = useState(false)
    
    useEffect(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.screenY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    },[])

   

    const navbarItems = [
        {name:"Home", href:"#home"},
        {name:"About", href:"#about"},
        {name:"Skills", href:"#skills"},
        {name:"Projects", href:"#projects"},
        {name:"Experience", href:"#experience"},
        {name:"Contact", href:"#contact"},
    ]



  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-slate-950 backdrop-blur-lg shadow-lg border-b borders-slate-800" 
    :"bg-transparent"}`}>
      {/* transition design */}
      <div className="container mx-auto px-6 py-4">
        {/* container */}
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="text-2xl font-bold">
            <span className="text-green-400">BRENDON</span>
            <span className="text-white">MAUNGWE</span>
            <span className="text-green-400">.</span>
          </div>

          {/* Desktop Menus */}
          <nav className="hidden md:flex space-x-8">
            {/* will use logic */}
            {navbarItems.map((item, index)=>{
                return <button className="text-gray-300 hover:text-green-400 transition-all duration-300 font-medium relative group"
                style={{animationDelay: `${index * 0.1}s`}}>
                    {item.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
            })}
          </nav>

          {/* Download CV */}
          <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg 
          hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer ">
            Download CV Now
          </button>

          
        </div>
      </div>
    </header>
);
};


export default Header