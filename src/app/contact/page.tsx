/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans p-8">
      <section className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="h-[400px] w-full bg-gray-200 rounded-md flex items-center justify-center">
              {/* Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Holy%20Cross%20College%2C%20Sta.%20Ana%2C%20Pampanga%2C%20Philippines&key=YOUR_GOOGLE_MAPS_API_KEY"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
              <p>
                Holy Cross College<br />
                Sta. Ana, Pampanga<br />
                Philippines
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
              <p>
                Phone: +63 (912) 345-6789<br />
                Email: info@pampangatravels.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clerk Authentication Section */}
      <div className="mt-6">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="text-blue-500 hover:text-blue-700">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </main>
  );
}
