import React from 'react'
import img1 from '../images/Brendon.jpg'

function About() {
  return (
    <section  id='home' className='min-h-screen flex items-center bg-linear-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden'>
      {/* background design */}
       <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to transparent"></div>
        </div>

        <div className="container mx-auto px-6 py-4">
          <div className="container px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-space">
              {/* Image side */}
              <div className={`relative transition-all duration-1000`}>
                <div className="relative-group">
                  <div className="w-full max-w-md mx-auto">
                   <div className='relative border-4 border-blue-500 rounded-2xl p-2 group-hover:border-blue-400 transition-all duration-300'>
                     <img src={img1}
                    alt="laptop image"
                    className='w-full rounded-xl transition-all duration-500 group-hover:scale-105' />
                   </div>
                  </div>
                </div>
              </div>
              {/* Content side about me */}
              <div className={`space-y-8 transition all duration-1000 delay-300`}>
                <div className="space-y-4">
                  <p className='text-green-400 font-semibold text-lg'>About me</p>
                  <h2 className='text-4xl md:text-5xl text-white font-bold animate-slide-up'>Who Am I ?</h2>
                  <p className='text-green-400 font-semibold delay-200'>Software Engineering Student/ Aspiring Full Stack Developer</p>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className={`text-lg transition-all duration-100 delay-500`}>
                    I’m Brendon, a dedicated Software Engineering student at Melsoft Academy with a deep curiosity for how technology shapes the world. 
                    My goal is to become a full-stack developer who builds innovative, efficient, and impactful digital products. 
                    I’m passionate about solving real-world problems through code, collaborating with creative minds, and continuously improving my craft. 
                    In the future, I aim to contribute to projects that push the boundaries of user experience and technological innovation.
                  </p>
                  <p className={`text-lg transition-all duration-100 delay-500`}>
                    Throughout my journey as a student, I’ve been exploring different areas of software development from understanding the logic behind programming languages 
                    to learning how design and functionality come together to create seamless digital experiences. I believe that great software isn’t just about writing code, 
                    but about crafting meaningful solutions that make people’s lives easier and more connected.
                  </p>
                </div>
                <div className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 delay-500`}>
                  <div className="group">
                    <p className='text-white font-semibold group-hover:text-green-400 transition-all duration'>
                      Name
                    </p>
                    <p className='text-gray-300'>Brendon Maungwe</p>
                  </div>
                   <div className="group">
                    <p className='text-white font-semibold group-hover:text-green-400 transition-all duration'>
                      Location
                    </p>
                    <p className='text-gray-300'>Gauteng</p>
                  </div>
                   <div className="group">
                    <p className='text-white font-semibold group-hover:text-green-400 transition-all duration'>
                      Email
                    </p>
                    <p className='text-gray-300'>brendontafadzwa19@gmail.com</p>
                  </div>
                   <div className="group">
                    <p className='text-white font-semibold group-hover:text-green-400 transition-all duration'>
                      Institution
                    </p>
                    <p className='text-gray-300'>Melsoft Academy</p>
                  </div>
                </div>
                {/* Download CV */}
                <div className='flex flex-wrap gap-4 transition-all duration-1000 delay-1100'>
                   <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg 
          hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer ">
            Download
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About

