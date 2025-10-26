import React from 'react'
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Menu",
            description: "A modern and responsive restaurant menu web page built using HTML and CSS. It features an elegant layout with interactive elements that enhance user experience. This project helped me practice working with structured design and responsive web styling.",
            image: "https://images.unsplash.com/photo-1557499305-bd68d0ad468d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1562",
            technologies:["HTML", "CSS"],
            category: "Front End",
            featured: true,
        },
        {
            id: 2,
            title: "Digital Clock",
            description: "A simple yet dynamic digital clock that displays real-time hours, minutes, and seconds using JavaScript. This project strengthened my understanding of DOM manipulation, real-time updates, and clean UI presentation.",
            image: "https://images.unsplash.com/photo-1580574252456-5279e8470478?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            technologies:["HTML", "CSS"],
            category: "Front End",
            featured: true,
        },
        {
            id: 3,
            title: "Team Portfolio Website",
            description: "A collaborative portfolio site designed to showcase a team’s skills, projects, and creativity. I focused on building a clean layout, smooth navigation, and responsive design to highlight team collaboration and modern web structure.",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
            technologies:["HTML", "CSS"],
            category: "Front End",
            featured: true,
        },
        {
            id: 4,
            title: "ToDo List",
            description: "An interactive to-do list app that allows users to add, delete, and manage daily tasks efficiently. Built with JavaScript, this project helped me explore CRUD functionality, local storage, and basic app logic for productivity tools.",
            image: "https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            technologies:["HTML", "CSS"],
            category: "Front End",
            featured: true,
        },
        {
            id: 5,
            title: "Currency Converter",
            description: "A functional currency converter that calculates real-time exchange values using JavaScript. This project deepened my understanding of API integration, user input handling, and presenting live data in a clean, accessible format.",
            image: "https://images.unsplash.com/photo-1583426965846-a3429b314b6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            technologies:["HTML", "CSS"],
            category: "Front End",
            featured: true,
        },
        {
            id: 6,
            title: "Hotel Page Remodel",
            description: "A redesigned hotel website that focuses on visual appeal, responsive design, and user-friendly navigation. The goal was to create a more modern, engaging interface that improves user experience and showcases design improvement skills.",
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            technologies:["HTML", "CSS"],
            category: "Front End",
            featured: true,
        },
    ]


  return (
    <section id='projects' className='min-h-screen flex items-center bg-linear-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden'>
         {/* background design */}
       <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className={`text-center mb-16 transition-all duration-1000`}>
                <p className='text-blue-400 font-semibold text-lg mb-4'>Portfolio</p>
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Featured Projects</h2>
                <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                   Take a look at some of my projects each one highlights my passion for web development and
                    my dedication to building clean, high-quality, and innovative digital experiences.
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* will use javascript for this part */}
                {projects.map((project, index)=>{
                    return ( <div className='group bg-slate-900 rounded-xl show-md hover:shadow-lg transition-all duration-1000 delay-600 overflow-hidden border 
                    border-slate-700 hover:border-blue-500 hover:scale-105' style={{transitionDelay: `${(index + 3) * 150} ms`}}>
                        <div className='relative overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-70 object-cover group-hover:scale-105 transition-all duration-300'/>
                            <div className='absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                <button className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300'>
                                    <Github className='w-4 h-4 text-gray-700' />
                                </button>
                                <button className='w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300'>
                                    <ExternalLink  className='w-4 h-4 text-gray-700' />
                                </button>
                            </div>
                        </div>
                        <div className='p-6'>
                            <div className='flex items-center justify-between mb-3'>
                                <span className='bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-xs font-medium'>{project.category}</span>
                            </div>
                            <h4 className='text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-all duration-300'>{project.title}</h4>
                            <p className='text-gray-300 text-sm mb-4 leading-relaxed'>{project.description}</p>
                            <div className='flex flex-wrap gap-1  mb-4 '>
                                {project.technologies.map((tech)=> {
                                    return <span className='bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>{tech}</span>
                                })}
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>

            <div className={`text-center transition-all duration-1000 delay-1000 mt-5`}>
             <button className='px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-lg hover:scale-105'>
                View All My Projects
             </button>
            </div>
        </div>
    </section>
  )
}

export default Projects