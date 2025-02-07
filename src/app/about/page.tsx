/* eslint-disable react/no-unescaped-entities */
// src/app/about/page.tsx
"use client"; // Important for client-side components (like maps)
import Image from "next/image"; // For optimized images
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans p-8">
      <section className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

        <div className="prose lg:prose-xl"> {/* Use prose class for better typography */}
          <p className="mb-6">
            Welcome to Pampanga's premier travel guide! We are a team of passionate locals dedicated to showcasing the beauty, culture, and rich history of Pampanga.  Our goal is to provide you with all the information you need to plan an unforgettable trip to our province.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            To inspire travelers to explore the hidden gems of Pampanga, support local businesses, and experience the warmth and hospitality of our people. We believe that travel enriches lives, and we're committed to making your Pampanga adventure truly special.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Image src="/images/team-member-1.jpg" alt="Team Member 1" width={150} height={150} className="rounded-full mx-auto mb-2" /> {/* Replace with actual image */}
              <h3 className="text-lg font-medium">Maria Santos</h3>
              <p className="text-gray-600">Founder & Travel Enthusiast</p>
            </div>
            <div className="text-center">
              <Image src="/images/team-member-2.jpg" alt="Team Member 2" width={150} height={150} className="rounded-full mx-auto mb-2" /> {/* Replace with actual image */}
              <h3 className="text-lg font-medium">Jose Cruz</h3>
              <p className="text-gray-600">Local Historian & Guide</p>
            </div>
            <div className="text-center">
              <Image src="/images/team-member-3.jpg" alt="Team Member 3" width={150} height={150} className="rounded-full mx-auto mb-2" /> {/* Replace with actual image */}
              <h3 className="text-lg font-medium">Anna Reyes</h3>
              <p className="text-gray-600">Content Creator & Photographer</p>
            </div>
          </div>


          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2> {/* Link to contact page */}
          <p>Have questions or suggestions?  <Link href="/contact" className="text-blue-500 hover:underline">Get in touch!</Link></p>
        </div>
      </section>
    </main>
  );
}