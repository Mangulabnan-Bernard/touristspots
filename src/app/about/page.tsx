/* eslint-disable react/no-unescaped-entities */
// src/app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 font-sans flex justify-center py-10">
      <section className="w-[90%] md:w-[80%] lg:w-[60%] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition duration-300">
        
        {/* About Us Section */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6 mb-12 transition duration-300">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-cyan-400 text-center mb-4">About Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            Welcome to Pampanga's premier travel guide! We are a team of passionate locals dedicated to showcasing the beauty, culture, and rich history of Pampanga. Our goal is to provide you with all the information you need to plan an unforgettable trip to our province.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6 mb-12 transition duration-300">
          <h2 className="text-2xl font-semibold text-center text-blue-900 dark:text-cyan-400 mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            To inspire travelers to explore the hidden gems of Pampanga, support local businesses, and experience the warmth and hospitality of our people. We believe that travel enriches lives, and we're committed to making your Pampanga adventure truly special.
          </p>
        </div>

        {/* Team Section (Now Inside a Box) */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6 mb-12 transition duration-300">
          <h2 className="text-2xl font-semibold text-center text-blue-900 dark:text-cyan-400 mb-8">Our Team</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
          <div className="flex justify-center">
            {[
              { name: "Bernard Mangulabnan", quote: "Debugging is like solving a puzzle—every error is an opportunity to learn and improve.", img: "PwsLPXIQSutRoojLY3McIlGB9ACk03Yyh2qjtfT4vDJEg68a" },
              // { name: "Steven Francis Lising", quote: "Writing clean code is like building a strong foundation; it ensures scalability and maintainability.", img: "PwsLPXIQSutRQOPsLEXbkie3ZgXtVnwCmIv01csh8KWlG7MP" },
              // { name: "John Paul Vismonte", quote: "Optimizing performance is about finding the most efficient path, just like in life.", img: "PwsLPXIQSutRFXXmQ0cK0QeEqUDxv1kNtAyVBi5b384WZmXs" },
              // { name: "Renz Samson", quote: "Collaboration in a team is like working with APIs—communication and integration are key to success.", img: "PwsLPXIQSutR4mZ2FIyx43FHW8OLMiCuU1lgrsvVKaZbXQhG" },
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition duration-300">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={`https://mxatayqbwx.ufs.sh/f/${member.img}`}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-medium text-blue-900 dark:text-cyan-400 mb-1">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 italic text-sm mb-2">Bachelor of Science in Computer Science</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{`"${member.quote}"`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section (Boxed) */}
        <div className="bg-blue-900 dark:bg-cyan-600 text-white rounded-lg shadow-md p-6 text-center transition duration-300">
  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
  <p className="text-gray-200 dark:text-gray-100 mb-4">
    Have questions or suggestions?{" "}
    <Link href="/contact" className="text-white dark:text-gray-200 hover:underline">
      Get in touch!
    </Link>
  </p>
  
  {/* socmeds Icons */}
  <div className="flex justify-center gap-6 mt-4">
    {/* GitHub */}
    <Link href="https://github.com/Mangulabnan-Bernard" target="_blank">
      <svg className="w-8 h-8 hover:scale-110 transition transform duration-200" 
        fill="white" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" 
          d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 
          0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.907-.62.068-.608.068-.608 
          1.003.07 1.531 1.031 1.531 1.031.89 1.525 2.335 1.085 2.904.83.09-.645.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 
          0-1.091.39-1.985 1.029-2.683-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.845c.85.004 
          1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.098 2.646.64.698 
          1.029 1.592 1.029 2.683 0 3.841-2.339 4.688-4.566 4.936.359.309.678.92.678 1.854 0 1.338-.012 2.42-.012 2.75 
          0 .267.18.577.688.48C19.138 20.162 22 16.416 22 12c0-5.523-4.477-10-10-10z">
        </path>
      </svg>
    </Link>
    {/* Facebook */}
    <Link href="https://www.facebook.com/brnd3" target="_blank">
      <svg className="w-8 h-8 hover:scale-110 transition transform duration-200" 
        fill="white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.5 9.95V14.89H7v-3h3.5V9.53c0-3.45 2.05-5.35 5.2-5.35 
          1.51 0 3.1.27 3.1.27v3.4H17c-1.62 0-2.12.99-2.12 2v2.15H18l-.5 3h-2.5v7.06A10 10 0 0 0 22 12z">
        </path>
      </svg>
    </Link>

    {/* YouTube */}
    <Link href="https://www.youtube.com/@schneizel34" target="_blank">
      <svg className="w-8 h-8 hover:scale-110 transition transform duration-200" 
        fill="white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.6 7.2s-.2-1.4-.8-2a3.6 3.6 0 0 0-2.4-1.7C15.6 3 12 3 12 3s-3.6 0-6.4.5A3.6 
          3.6 0 0 0 3.2 5.2C2.7 5.8 2.6 7.2 2.6 7.2S2.5 9 2.5 11v2c0 2 .1 3.8.1 3.8s.2 1.4.8 2a3.6 
          3.6 0 0 0 2.4 1.7C8.4 21 12 21 12 21s3.6 0 6.4-.5a3.6 3.6 0 0 0 2.4-1.7c.6-.6.8-2 .8-2s.1-1.8.1-3.8v-2c0-2-.1-3.8-.1-3.8zM9.5 
          15V9l5.5 3-5.5 3z">
        </path>
      </svg>
    </Link>

  </div>
</div>

      </section>
    </main>
  );
}