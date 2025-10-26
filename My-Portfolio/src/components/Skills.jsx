import React from 'react'
import { CodeXml } from 'lucide-react';
import { ToolCase } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';
import { MonitorSmartphone } from 'lucide-react';


function Skills() {
  return (
    <section id='skills' className='min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden'>
        {/* background design */}
       <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to transparent"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className={`space-y-8 transition all duration-1000 delay-300 max-w-2xl mx-auto`}>
                <div className="space-y-4">
                  <h2 className='text-4xl md:text-5xl text-blue-400 font-bold animate-slide-up text-center '>Skills and Expertise</h2>
                </div>
                
                <div className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 delay-500`}>
                  <div className="group">
                    <p className='text-white font-semibold text-2xl'>
                      <CodeXml className='w-12 h-12 text-blue-400 '/>  Front-End
                    </p>
                    <p className='text-gray-300'>HTML</p>
                    <p className='text-gray-300'>CSS</p>
                    <p className='text-gray-300'>JavaScript</p>
                    <p className='text-gray-300'>React</p>
                    <p className='text-gray-300'>Tailwind</p>
                  </div>
                   <div className="group">
                    <p className='text-white font-semibold text-2xl'>
                      <ToolCase className='w-12 h-12 text-blue-400 '/> Tools
                    </p>
                    <p className='text-gray-300'>GitHub</p>
                    <p className='text-gray-300'>Figma</p>
                    <p className='text-gray-300'>VsCode</p>
                   
                  </div>
                  <div className="group">
                    <p className='text-white font-semibold text-2xl'>
                      <BrainCircuit  className='w-12 h-12 text-blue-400 '/> Soft Skills
                    </p>
                    <p className='text-gray-300'>Problem Solving</p>
                    <p className='text-gray-300'>Teamwork</p>
                    <p className='text-gray-300'>Adaptability</p>
                    <p className='text-gray-300'>Effective Communication</p>
                    <p className='text-gray-300'>Leadership</p>
                  </div>

                  <div className="group">
                    <p className='text-white font-semibold text-2xl'>
                      <MonitorSmartphone  className='w-12 h-12 text-blue-400 '/> Digital
                    </p>
                    <p className='text-gray-300'>SEO Optimization</p>
                    <p className='text-gray-300'>Web Design</p>
                    <p className='text-gray-300'>Automation & AI</p>
                    <p className='text-gray-300'>Video Editing</p> 
                  </div>
                   
                </div>
              </div>
        </div>
    </section>
  )
}

export default Skills