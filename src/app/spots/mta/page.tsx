/* eslint-disable react/no-unescaped-entities */
// src/app/spots/mta/page.tsx
"use client";
import Image from "next/image";

export default function MountArayatPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRKMfLHk6X8kLTRVqaJOEfSBZHY4QvGhy92Uw5" // Replace with your hero image
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
              className="bg-white text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">About Mount Arayat</h2>
            <p className="text-lg text-gray-600 mb-6">
              Mount Arayat, an isolated potentially active stratovolcano,
              dominates the landscape of the Central Luzon plains in Pampanga,
              Philippines. Rising to a height of 1,033 meters (3,389 ft), it
              offers breathtaking views and a rich history intertwined with
              folklore and legends.  Its southern half lies within the
              municipality of Arayat, while its northern half and summit are in
              Magalang.  Ten miles to the west is Angeles City, and 75km south
              lies Manila.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              The mountain features a breached crater on its northwest side,
              evidence of past volcanic activity.  The breach is about 1.2km in
              diameter. Weak steaming is still present in some eroded vents,
              suggesting the volcano is still potentially active. The only
              dated rocks are 530,000 and 650,000-year-old basalts, predating the
              collapse and formation of the lava dome known as White Rock.  An
              analysis report indicates an eruption within the last 2,000 years.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Mount Arayat was declared a national park in 1933 and a tourist
              spot in 1997. It is currently under threat from deforestation.
            </p>
          </div>
          <div>
            <Image
              src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRcwBzs9fbVjpt4EzhluQMnGsOZ92Y8dID7kqr" // Replace with a landscape image
              alt="Mount Arayat Landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Hiking Information Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Hiking Mount Arayat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Southern Trail</h3>
            <p className="text-gray-600">Difficulty: Moderate</p>
            <p className="text-gray-600">Duration: 3-4 hours</p>
            <p className="text-gray-600">
              Starting Point: San Juan Baño, Arayat, Pampanga
            </p>
            <p className="text-gray-600">
              Features: Offers views of Central Luzon, including the Pampanga
              River, and the collapsed western slope.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Northern Trail</h3>
            <p className="text-gray-600">Difficulty: Moderate</p>
            <p className="text-gray-600">Duration: 3-4 hours</p>
            <p className="text-gray-600">
              Starting Point: Pampanga State Agricultural University, Magalang,
              Pampanga
            </p>
            <p className="text-gray-600">
              Features: Traverses the Arayat Amphitheatre and White Rock.
            </p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Note: There are also two other trails, the Pinnacle and TKO, but these
          are considered more challenging and are not considered peaks.
        </p>
      </section>

      {/* Folklore Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Folklore and Legends</h2>
        <p className="text-lg text-gray-600">
          Mount Arayat is deeply embedded in Kapampangan mythology. It is
          believed to be the home of Aring Sinukuan (also known as Sinukuan or
          Sucu), a powerful male deity before Spanish colonization, later
          syncretized with the female diwata Maria Sinukuan.  He was a rival of
          Apu Namalyari of Mount Pinatubo.
        </p>
        <p className="text-lg text-gray-600">
          Sinukuan was the god of the sun, war, and death, and taught the early
          inhabitants metallurgy, wood cutting, rice culture, and warfare. He had
          three children: Munag Sumala (dawn), Lakandanup (noon), and Gatpanapun
          (afternoon). He also had a winged giant eagle assistant, Galura.
        </p>
        <p className="text-lg text-gray-600">
          The name "Arayat" has several possible origins, including from
          Fernando de Arayat, a Spanish encomiendero, from the Kapampangan word
          "dayatan&quot; (dry season rice crop), or from "Alaya" (east). Some even
          theorize a connection to the biblical Mount Ararat.
        </p>
      </section>
    </main>
  );
}