/* eslint-disable react/no-unescaped-entities */
// src/app/spots/church/page.tsx
"use client";
import Image from "next/image";

export default function SanGuillermoChurchPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRlyE2X7xtomwAR8O0vqcC34jNnMYfudSxtKpa" // Replace with your hero image
          alt="San Guillermo Parish Church"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              San Guillermo Parish Church
            </h1>
            <p className="text-2xl mb-8 drop-shadow-lg">
              A Historic Church in Bacolor, Pampanga
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              About San Guillermo Parish Church
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              San Guillermo Parish Church is a Roman Catholic church in
              Bacolor, Pampanga, Philippines, under the Archdiocese of San
              Fernando. Named after Bacolor's patron saint, San Guillermo, it
              was originally built by Augustinian Friars in 1576.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              The church has a rich history, having been destroyed by an
              earthquake in 1880 and rebuilt in 1886. In 1995, the church was
              half-buried by lahar from the eruption of Mount Pinatubo, making
              it a unique and poignant landmark.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Despite the lahar damage, the church remains an active place of
              worship and a popular tourist destination. The ornate main
              retablo, side retablos, and pulpit, gilded with gold leaf,
              showcase the Baroque architectural style. The Museo de Bacolor,
              located within the church, houses memorabilia and artifacts,
              including paintings related to the Pinatubo eruption.
            </p>
          </div>
          <div>
            <Image
              src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR5gjkJZESdUnj0Wk4geF6X1Ru2Js3LYiMwxzG" // Replace with a landscape image
              alt="San Guillermo Church Landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>


      {/* Additional Information Section (Example) */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">
          More about San Guillermo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Architecture and Features
            </h3>
            <p className="text-gray-600">
              The church's interior boasts a central nave and a well-lit
              transept with windows. The gilded retablos and pulpit are
              characteristic of the Baroque and Rococo styles.  The retablos
              contain centuries-old statues that were saved from the lahar.
              The choir area was moved after the eruption.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Museo de Bacolor
            </h3>
            <p className="text-gray-600">
              The museum within the church, also known as Recuerdos Sagrados de
              Bacolor (Sacred Memorabilia of Bacolor), displays items related
              to the church's history and the impact of the Mount Pinatubo
              eruption.
            </p>
          </div>
        </div>
      </section>

      {/* Media Section (Example) */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Media</h2>
        <p className="text-lg text-gray-600">
          San Guillermo Parish Church has been featured in various media,
          including the ABS-CBN show "May Bukas Pa" and films like "Istokwa"
          and "Summer Heat."
        </p>
        {/* Add more media details as needed */}
      </section>
    </main>
  );
}