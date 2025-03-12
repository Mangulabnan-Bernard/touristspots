"use client";
import Image from "next/image";

export default function NayongPilipinoClarkPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans transition duration-300">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRK1Re31X8kLTRVqaJOEfSBZHY4QvGhy92Uw5z"
          alt="Nayong Pilipino Clark"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Nayong Pilipino Clark
            </h1>
            <p className="text-2xl mb-8 drop-shadow-lg">
              A Showcase of Filipino Culture and Heritage
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
              About Nayong Pilipino Clark
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Nayong Pilipino Clark is a cultural park showcasing the rich
              history and diverse cultures of the Philippines. It offers
              visitors a chance to experience traditional Filipino architecture,
              crafts, and performances in one convenient location.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              The park features replicas of historical landmarks, traditional
              houses from different regions, and villages representing various
              indigenous groups. Museums within the park display exhibits on
              Philippine currency, textiles, and culture.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Nayong Pilipino Clark also hosts cultural performances, including
              traditional dances like tinikling, singkil, and others, providing
              visitors with an immersive cultural experience.
            </p>
          </div>
          <div>
            <Image
              src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRnFyIbAvIk5pOnFGovmXjSa8twVUilb0WEPz7"
              alt="Nayong Pilipino Clark Landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-800 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Attractions and Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Traditional Houses", desc: "Explore replicas of traditional Filipino houses from various regions." },
            { title: "Museums", desc: "Visit museums showcasing Philippine currency, textiles, and culture." },
            { title: "Cultural Performances", desc: "Enjoy traditional Filipino dances and music." },
            { title: "Historical Landmarks", desc: "See replicas of significant historical sites." },
            { title: "Indigenous Villages", desc: "Learn about the cultures of various indigenous groups." },
          ].map((attraction, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {attraction.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{attraction.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Plan Your Visit
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Nayong Pilipino Clark is located in the Clark Freeport Zone, Pampanga.
          Contact information and updated details about opening hours and events
          can be found on their official website or social media pages.
        </p>
      </section>
    </main>
  );
}
