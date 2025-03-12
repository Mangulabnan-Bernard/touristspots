/* eslint-disable react/no-unescaped-entities */
// src/app/spots/falls/page.tsx
"use client";
import Image from "next/image";

export default function MiyamitFallsPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans transition duration-300">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRv0Uju4szgMROLJDYbxKeXrpGsmBVCt7Eu5oa" // Replace with your hero image
          alt="Miyamit Falls"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Miyamit Falls</h1>
            <p className="text-2xl mb-8 drop-shadow-lg">
              Twin Cascades in the Heart of Pampanga
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
              About Miyamit Falls
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Miyamit Falls, nestled in the Cabusilan Mountain Range, is a
              popular adventure destination in Pampanga. The twin cascades
              offer a refreshing escape, rewarding trekkers with their
              icy-cold waters after a challenging hike.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Less than two hours from the city, the jump-off point is a
              community of Aeta people. The local climate is cool due to the
              altitude, and the scenery transitions from flatlands to rolling
              terrain.  Along the trail, you can see views of Clark Freeport,
              Angeles City, Mabalacat, and, if you're lucky, Mount Arayat.
            </p>
          </div>
          <div>
            <Image
              src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRvL797dzgMROLJDYbxKeXrpGsmBVCt7Eu5oal" // Replace with a landscape image
              alt="Miyamit Falls Landscape"
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
          Hiking Miyamit Falls
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Sapang Uwak Trail
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Difficulty: Moderate</p>
            <p className="text-gray-600 dark:text-gray-300">Duration: 4-5 hours</p>
            <p className="text-gray-600 dark:text-gray-300">
              This is the more common trail, used by trekkers, bikers, and 4x4
              vehicles. It features gradual ascents and many recovery points,
              but is mostly exposed to the sun.  It offers a view deck with
              panoramic views, and a forest trail with some carved steps.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Babatibat Trail
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Difficulty: Challenging</p>
            <p className="text-gray-600 dark:text-gray-300">Duration: 8-10 hours</p>
            <p className="text-gray-600 dark:text-gray-300">
              This trail starts from Villa Maria and involves an hour of
              assault. It features views of Pampanga plains, the "Narra
              Street," cliffside footpaths, steep ascents and descents, thick
              grass, and an upstream trek with seven waterfalls. It meets
              the Sapang Uwak trail near the falls.
            </p>
          </div>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          Tips for hikers include bringing enough hydration, wearing
          protective clothing, using sunblock, resting when needed, preparing
          with cardio exercises, bringing trail food, using walking canes,
          having headlamps, insect repellent, and bringing something for the
          locals. It is also recommended to coordinate with the LGU and
          practice Leave No Trace principles.
        </p>
      </section>

      {/* Additional Information Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Additional Information
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Local guides are available, and it is recommended to arrange with
          them beforehand, especially for early morning treks.  Always
          check with the local tourism office for any updates or regulations.
        </p>
      </section>
    </main>
  );
}
