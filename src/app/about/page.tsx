/* eslint-disable react/no-unescaped-entities */
// src/app/about/page.tsx
"use client"; // Important for client-side components (like maps)
import Image from "next/image"; // For optimized images
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans p-8">
      <section className="container mx-auto max-w-4xl">
        {/* About Us Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">About Us</h1>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            Welcome to Pampanga's premier travel guide! We are a team of passionate locals dedicated to showcasing the beauty, culture, and rich history of Pampanga. Our goal is to provide you with all the information you need to plan an unforgettable trip to our province.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-center text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-center leading-relaxed">
            To inspire travelers to explore the hidden gems of Pampanga, support local businesses, and experience the warmth and hospitality of our people. We believe that travel enriches lives, and we're committed to making your Pampanga adventure truly special.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center text-blue-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRoojLY3McIlGB9ACk03Yyh2qjtfT4vDJEg68a"
                  alt="Team Member 1"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-blue-900 mb-1">Bernard Mangulabnan</h3>
              <p className="text-gray-500 italic text-sm mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600 text-sm">
                "Debugging is like solving a puzzle—every error is an opportunity to learn and improve."
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRQOPsLEXbkie3ZgXtVnwCmIv01csh8KWlG7MP"
                  alt="Team Member 2"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-blue-900 mb-1">Steven Francis Lising</h3>
              <p className="text-gray-500 italic text-sm mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600 text-sm">
                "Writing clean code is like building a strong foundation; it ensures scalability and maintainability."
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR0tP6zQ7NXoD3LRYx4gu25hbs9QVBPCEI7yfT"
                  alt="Team Member 3"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-blue-900 mb-1">John Paul Vismonte</h3>
              <p className="text-gray-500 italic text-sm mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600 text-sm">
                "Optimizing performance is about finding the most efficient path, just like in life."
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR5VmSblESdUnj0Wk4geF6X1Ru2Js3LYiMwxzG"
                  alt="Team Member 4"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-blue-900 mb-1">Renz Samson</h3>
              <p className="text-gray-500 italic text-sm mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600 text-sm">
                "Collaboration in a team is like working with APIs—communication and integration are key to success."
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-900 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-200">
            Have questions or suggestions?{" "}
            <Link href="/contact" className="text-white hover:underline">
              Get in touch!
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}