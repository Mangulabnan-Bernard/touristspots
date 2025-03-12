/* eslint-disable react/no-unescaped-entities */
// src/app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans flex justify-center py-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Bernard Mangulabnan", quote: "Debugging is like solving a puzzle—every error is an opportunity to learn and improve.", img: "PwsLPXIQSutRoojLY3McIlGB9ACk03Yyh2qjtfT4vDJEg68a" },
              { name: "Steven Francis Lising", quote: "Writing clean code is like building a strong foundation; it ensures scalability and maintainability.", img: "PwsLPXIQSutRQOPsLEXbkie3ZgXtVnwCmIv01csh8KWlG7MP" },
              { name: "John Paul Vismonte", quote: "Optimizing performance is about finding the most efficient path, just like in life.", img: "PwsLPXIQSutRFXXmQ0cK0QeEqUDxv1kNtAyVBi5b384WZmXs" },
              { name: "Renz Samson", quote: "Collaboration in a team is like working with APIs—communication and integration are key to success.", img: "PwsLPXIQSutR4mZ2FIyx43FHW8OLMiCuU1lgrsvVKaZbXQhG" },
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition duration-300">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
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
          <p className="text-gray-200 dark:text-gray-100">
            Have questions or suggestions?{" "}
            <Link href="/contact" className="text-white dark:text-gray-200 hover:underline">
              Get in touch!
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
