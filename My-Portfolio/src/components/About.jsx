import React from 'react'

const About = () => {
  return (
    <section id='home' className='min-h-screen flex items-center bg-linear-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden'>
         {/* Background made better */}
        <div className="absolute inset-0">
              <div className='border-b border-neutral-900 pb-4'>
        <h1 className={'text-5xl text-center md:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-200'}>About me</h1>
    </div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to transparent"></div>
        </div>
        
        
    </section>
  )
}

export default About

