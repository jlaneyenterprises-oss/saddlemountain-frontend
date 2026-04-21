import type { Metadata } from "next";
import Gallery from "@/components/gallery";

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Community Center, pool, pickleball & tennis courts, laundry, showers, dog runs, and more at Saddle Mountain RV Park in Tonopah, AZ.",
};

const amenities = [
  {
    title: "Community Center",
    description: "Gather with fellow guests for events and socializing.",
    icon: "🏠",
  },
  {
    title: "Library Nook",
    description: "Unwind with a good book in our cozy reading area.",
    icon: "📚",
  },
  {
    title: "Pickleball Courts",
    description: "Stay active with pickleball — one of the fastest growing sports.",
    icon: "🏓",
  },
  {
    title: "Tennis Courts",
    description: "Full-size tennis courts for players of all skill levels.",
    icon: "🎾",
  },
  {
    title: "Swimming Pool",
    description: "Take a refreshing dip in our pool and soak up the Arizona sunshine.",
    icon: "🏊",
  },
  {
    title: "Picnic Tables",
    description: "Enjoy outdoor meals at tables scattered throughout the park.",
    icon: "🪑",
  },
  {
    title: "Dog Runs (Two)",
    description: "Two spacious dog runs so your pets can play and socialize safely.",
    icon: "🐾",
  },
  {
    title: "Laundry Facilities",
    description: "Convenient on-site laundry facilities for your comfort.",
    icon: "🧺",
  },
  {
    title: "Showers",
    description: "Clean shower facilities available for all park guests.",
    icon: "🚿",
  },
];

const amenityImages = [
  { src: "/images/gallery-11.jpg", alt: "Park amenities overview" },
  { src: "/images/gallery-03.jpg", alt: "Park grounds and facilities" },
  { src: "/images/gallery-09.jpg", alt: "Community gathering space" },
  { src: "/images/gallery-06.jpg", alt: "Recreation facilities" },
  { src: "/images/gallery-12.jpg", alt: "Park outdoor area" },
  { src: "/images/gallery-14.jpg", alt: "Desert views" },
  { src: "/images/gallery-13.jpg", alt: "Pool area" },
  { src: "/images/gallery-15.jpg", alt: "Amenity facilities" },
];

export default function AmenitiesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Amenities</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Everything you need for comfortable RV living in the Arizona desert
        </p>
      </section>

      {/* Description */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed text-center">
            Guests can gather in our welcoming Community Center or relax with a
            good book in the cozy library nook. For those looking to stay active,
            we offer pickleball and tennis courts. You can also take a dip in our
            refreshing pool or bask in the abundant sunshine. Enjoy outdoor meals
            at our picnic tables scattered throughout the park, and let your pets
            play in our two spacious dog runs. We provide convenient laundry
            facilities and showers for your comfort. Nearby Buckeye and Verrado
            offer a variety of shopping and dining options. Escape the
            city&apos;s hustle and bustle and unwind at our tranquil park. We
            look forward to welcoming you!
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{amenity.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Park Facilities
          </h2>
          <Gallery images={amenityImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Reserve Your Spot?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us today to learn about availability and rates.
          </p>
          <a
            href="/rates"
            className="inline-block bg-primary text-white px-8 py-3 rounded font-medium hover:bg-primary/90 transition-colors"
          >
            View Rates &amp; Reserve
          </a>
        </div>
      </section>
    </>
  );
}
