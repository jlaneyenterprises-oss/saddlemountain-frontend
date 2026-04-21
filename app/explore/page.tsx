import type { Metadata } from "next";
import Image from "next/image";
import Gallery from "@/components/gallery";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Explore Saddle Mountain RV Park in Tonopah, AZ. View our park map, spacious sites, desert surroundings, and community amenities.",
};

const galleryImages = [
  { src: "/images/dorm-01.jpg", alt: "Dormitory interior" },
  { src: "/images/dorm-02.jpg", alt: "Dormitory room" },
  { src: "/images/dorm-03.jpg", alt: "Dormitory building" },
  { src: "/images/gallery-04.jpg", alt: "Park facilities" },
  { src: "/images/dorm-04.jpg", alt: "Dormitory exterior" },
  { src: "/images/gallery-03.jpg", alt: "Park grounds" },
  { src: "/images/gallery-01.jpg", alt: "Desert landscape views" },
  { src: "/images/gallery-11.jpg", alt: "Community area" },
  { src: "/images/gallery-10.jpg", alt: "Park surroundings" },
];

export default function ExplorePage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover what makes Saddle Mountain RV Park a great place to call home
        </p>
      </section>

      {/* Park Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-gray-600 text-lg space-y-4">
            <p>
              Welcome to Saddle Mountain RV Park, where we offer spacious sites
              with full hook-ups in a serene desert setting. Discover the natural
              beauty of Saddle Mountain with nearby hiking and rock hunting
              opportunities. Our Community Center is the perfect place to connect
              with fellow guests, or you can unwind in the cozy library nook.
              Stay active with our pickleball and tennis courts, take a
              refreshing swim in our pool, or simply soak up the abundant
              sunshine. Enjoy outdoor meals at our picnic tables scattered
              throughout the park, and let your pets have fun in our two dog
              runs. For your convenience, we provide laundry facilities and
              showers.
            </p>
            <p>
              Nearby communities of Buckeye and Verrado offer a variety of
              shopping and dining options.
            </p>
          </div>
        </div>
      </section>

      {/* Saddle Mountain Lifestyle */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Saddle Mountain Lifestyle</h2>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200">
            <Image
              src="/images/site-map.png"
              alt="Saddle Mountain RV Park plot map"
              fill
              className="object-contain"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
          <Gallery images={galleryImages} />
        </div>
      </section>
    </>
  );
}
