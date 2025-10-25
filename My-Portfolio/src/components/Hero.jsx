import React from 'react'
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';


const Hero = () => {
  return (
    <section id='home' className='min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden'>
        {/* Background made better */}
        <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to transparent"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* The content on the left */}
                <div className='space-y-8'>
                    <div className="space-y-4">
                        <p className={'text-green-400 font-semibold text-lg transition-all duration-1000'}>
                            Get Read To Start Work
                        </p>
                        <h1 className={'text-5xl md:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-200'}>
                            I'm a
                            <span className='text-green-400'> Software Engineering Student,</span>
                            <span className='text-white'> Brendon Maungwe.</span>
                        </h1>
                        <p className={'text-gray-300 text-lg leading-relaxed max-w-lg transition-all duration-100 delay-400'}>
                            I’m a passionate Software Engineering student at Melsoft Academy, focused 
                            on building clean, efficient, and user-friendly digital solutions. I love 
                            turning ideas into functional web experiences and constantly learning new technologies to grow as a developer.
                        </p>
                        <button className='bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex 
                        items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105'>
                            LEARN MORE 
                        </button>

                        <div className="flex gap-4 pt-6 transition-all duration-100 delay-800">
                            <a href="https://github.com/Brendon-btd" className='w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white 
                            transition-all duration-300 group hover:scale-110 hover:rotate-6'>
                                <Github className='w-5 h-5' />
                            </a>
                           <a href="https://www.linkedin.com/in/brendon-maungwe-0296b5355/" className='w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white 
                            transition-all duration-300 group hover:scale-110 hover:rotate-6'>
                                <Linkedin className='w-5 h-5' />
                            </a>
                        </div>
                    </div>
                </div>
                {/* The content on the right */}
                <div className={'relative transition-all duration-1000 delay-300'}>
                    <div className='relative'>
                        <div className='w-full max-w-lg mx-auto'>
                            <div className='relative group'>
                                <img src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170' alt=""
                                className='w-full rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-185' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero