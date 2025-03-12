/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isClient, setIsClient] = useState(false);

  // Fix hydration issues by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 font-sans p-8 transition-all duration-300">
      <section className="container mx-auto max-w-4xl bg-white dark:bg-gray-900 shadow-lg rounded-3xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-900 dark:text-indigo-300 mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold text-indigo-900 dark:text-indigo-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 border border-indigo-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 bg-gray-100 dark:bg-gray-800 transition duration-300"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold text-indigo-900 dark:text-indigo-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border border-indigo-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 bg-gray-100 dark:bg-gray-800 transition duration-300"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="font-semibold text-indigo-900 dark:text-indigo-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 border border-indigo-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-900 dark:focus:ring-indigo-600 bg-gray-100 dark:bg-gray-800 transition duration-300"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-900 dark:bg-indigo-700 text-white py-3 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Contact Info Section */}
          <div className="space-y-6">
            {/* Google Maps iframe - Fix hydration issue */}
            {isClient && (
              <div className="h-[400px] w-full rounded-md overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7704.333173787799!2d120.76517022579603!3d15.094144737023884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fba8a871ef9d%3A0xcf10e5f6f2a968cc!2sHoly%20Cross%20College%20-%20Pampanga!5e0!3m2!1sen!2sph!4v1739098898523!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300 mb-2">Our Location</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Holy Cross College<br />
                Sta. Ana, Pampanga<br />
                Philippines
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-300 mb-2">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: +63 (912) 345-6789<br />
                Email: info@pampangatravels.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clerk Auth Buttons - Fix hydration issue */}
      {isClient && (
        <div className="mt-6 flex justify-center space-x-4">
         
        </div>
      )}
    </main>
  );
}
