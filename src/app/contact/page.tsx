/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { sendEmail } from "~/server/sendEmail";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await sendEmail(formData.name, formData.email, formData.message);

    if (res.success) {
      setFormData({ name: "", email: "", message: "" });
      toast.success("Email sent successfully! 📩");
    } else {
      setStatus("Failed to send email.");
    }
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 text-gray-800
     dark:text-gray-200 font-sans p-8 transition-all duration-300  overflow: hidden;">
      <section className="container mx-auto max-w-4xl h-[550px] bg-white dark:bg-gray-900 shadow-lg rounded-3xl p-5">
        <h1 className="text-4xl font-bold text-center text-indigo-900 dark:text-indigo-300 mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400">
              We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
            </p>

            <style jsx global>{`
        html, body {
          overflow: hidden;
        }
      `}</style>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold text-indigo-900 dark:text-indigo-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                    placeholder="Enter your name"
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
                  placeholder="Enter your Email"
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
                  placeholder="Enter your message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-900 dark:bg-indigo-700 text-white py-3 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300"
              >
                Send Messsage
              </button>
            </form>
            {isLoading && (
              <div className="flex justify-center my-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="6" width="2.8" height="12">
                    <animate id="spinner_CcmT" begin="0;spinner_IzZB.end-0.1s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                    <animate begin="0;spinner_IzZB.end-0.1s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                  </rect>
                  <rect x="5.8" y="6" width="2.8" height="12">
                    <animate begin="spinner_CcmT.begin+0.1s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                    <animate begin="spinner_CcmT.begin+0.1s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                  </rect>
                  <rect x="10.6" y="6" width="2.8" height="12">
                    <animate begin="spinner_CcmT.begin+0.2s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                    <animate begin="spinner_CcmT.begin+0.2s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                  </rect>
                  <rect x="15.4" y="6" width="2.8" height="12">
                    <animate begin="spinner_CcmT.begin+0.3s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                    <animate begin="spinner_CcmT.begin+0.3s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                  </rect>
                  <rect x="20.2" y="6" width="2.8" height="12">
                    <animate id="spinner_IzZB" begin="spinner_CcmT.begin+0.4s" attributeName="y" calcMode="spline" dur="0.6s" values="6;1;6" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                    <animate begin="spinner_CcmT.begin+0.4s" attributeName="height" calcMode="spline" dur="0.6s" values="12;22;12" keySplines=".36,.61,.3,.98;.36,.61,.3,.98"/>
                  </rect>
                </svg>
              </div>
            )}
            {status && <p className="text-center text-indigo-600 dark:text-indigo-400">{status}</p>}
          </div>

          {/* Map and Contact Info Section */}
          <div className="space-y-6">
            {/* Google Maps iframe */}
            <div>
              <h2 className="text-x font-semibold text-indigo-900 dark:text-indigo-300 mb-2">Our Location</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Holy Cross College<br />
                Sta. Ana, Pampanga<br />
                Philippines
              </p>
            </div>

            <div>
              <h2 className="text-x font-semibold text-indigo-900 dark:text-indigo-300 mb-2">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: +63 (912) 345-6789<br />
                Email: info@pampangatravels.com
              </p>
            </div>
            <div className="h-[190px] w-full rounded-md overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7704.333173787799!2d120.76517022579603!3d15.094144737023884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fba8a871ef9d%3A0xcf10e5f6f2a968cc!2sHoly%20Cross%20College%20-%20Pampanga!5e0!3m2!1sen!2sph!4v1739098898523!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
