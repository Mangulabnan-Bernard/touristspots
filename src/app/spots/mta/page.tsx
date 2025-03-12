/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

export default function MountArayatPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans transition duration-300">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRKMfLHk6X8kLTRVqaJOEfSBZHY4QvGhy92Uw5"
          alt="Mount Arayat"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Mount Arayat</h1>
            <p className="text-2xl mb-8 drop-shadow-lg">
              A Mystical Stratovolcano in the Heart of Pampanga
            </p>
            <a
              href="#details"
              className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              About Mount Arayat
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Mount Arayat is an isolated, potentially active stratovolcano that stands at **1,026 meters (3,366 feet)** in Pampanga. 
              It is known for its **mystical folklore**, dense forests, and two peaks—**North Peak (Summit 1)** and **South Peak (Summit 2)**.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Although there are no recorded eruptions, the mountain is considered a dormant volcano. 
              It is home to **Arayat National Park**, offering a variety of flora, fauna, and natural pools.
            </p>
          </div>
          <div>
            <Image
              src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRcwBzs9fbVjpt4EzhluQMnGsOZ92Y8dID7kqr"
              alt="Mount Arayat Landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Hiking Information Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-800 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Hiking Mount Arayat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Southern Trail (Magalang Trail)
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Difficulty: Moderate</p>
            <p className="text-gray-600 dark:text-gray-300">Duration: 4-6 hours to Summit</p>
            <p className="text-gray-600 dark:text-gray-300">
              This is the **easier trail** to Mount Arayat’s South Peak, starting from **Brgy. Ayala, Magalang, Pampanga**.
              It features **a well-maintained trail**, gradual ascents, and views of surrounding provinces.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Northern Trail (Arayat Trail)
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Difficulty: Difficult</p>
            <p className="text-gray-600 dark:text-gray-300">Duration: 6-8 hours to Summit</p>
            <p className="text-gray-600 dark:text-gray-300">
              This **challenging trail** starts from **Brgy. San Juan Baño, Arayat, Pampanga** and leads to North Peak. 
              It features **steep ascents, dense forests, and the infamous White Rock Formation**.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Additional Information
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Both trails **can be traversed** (North Peak to South Peak) in about **10-12 hours**. 
          Local guides are highly recommended, as the trails have **unmarked paths** and **challenging terrains**.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Hikers should **prepare physically** and bring:
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Enough **water and food** for the long hike</li>
          <li>Proper **hiking gear** (trekking pole, gloves, sturdy shoes)</li>
          <li>Sun protection (hat, sunscreen, arm sleeves)</li>
          <li>Headlamp or flashlight for **early/late hikes**</li>
          <li>First aid kit and insect repellent</li>
        </ul>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
          Contact the **local tourism office** before hiking to check for weather conditions, trail safety, and permits.
          Always follow the **Leave No Trace** principles to protect the environment.
        </p>
      </section>
    </main>
  );
}
