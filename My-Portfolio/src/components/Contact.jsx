import React from "react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
     className="bg-linear-to-br from-slate-900 to-slate-900 pt-32 pb-30 relative overflow-hidden"
    >
      {/* background design */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-transparent via-green-600/5 to transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="border-t border-blue-900 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl text-blue-400 font-bold animate-slide-up">
            Get In Contact
          </h1>
          <div className="text-center tracking-tight">
            <p className="text-white font-semibold text-2xl py-7">
              South Africa, Gauteng, Johannesburg
            </p>
            <p className="text-white font-semibold text-2xl py-6">
              Contact Details:
            </p>
            <p className="text-gray-300">+27 60 475 55509</p>
            <p className="text-gray-300">brendontafadzwa19@gmail.com</p>
            <p className="text-white font-semibold text-2xl py-7">
              Connect With Me
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/Brendon-btd"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white 
        transition-all duration-300 group hover:scale-110 hover:rotate-6"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/brendon-maungwe-0296b5355/"
                className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white 
        transition-all duration-300 group hover:scale-110 hover:rotate-6"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
