import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import NewsletterForm from "@/components/newsletter-form";

const galleryImages = [
  { src: "/images/gallery-01.jpg", alt: "Saddle Mountain RV Park desert landscape" },
  { src: "/images/gallery-02.jpg", alt: "Aerial view of Saddle Mountain RV Park" },
  { src: "/images/gallery-03.jpg", alt: "Park facilities and grounds" },
  { src: "/images/gallery-04.jpg", alt: "RV sites with full hookups" },
  { src: "/images/gallery-05.jpg", alt: "Park community area" },
  { src: "/images/gallery-06.jpg", alt: "Pickleball and recreation facilities" },
  { src: "/images/gallery-07.jpg", alt: "Desert views from the park" },
  { src: "/images/gallery-08.jpg", alt: "Pool and outdoor amenities" },
  { src: "/images/gallery-09.jpg", alt: "Community gathering space" },
  { src: "/images/gallery-10.jpg", alt: "Park entrance and landscaping" },
  { src: "/images/gallery-11.jpg", alt: "Spacious RV sites" },
  { src: "/images/dorm-03.jpg", alt: "Dormitory building exterior" },
  { src: "/images/dorm-02.jpg", alt: "Dormitory room interior" },
  { src: "/images/dorm-01.jpg", alt: "Dormitory amenities" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Saddle Mountain</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Welcome to Saddle Mountain RV Park, where we offer spacious sites
            with full hook-ups in a serene desert setting. Discover the natural
            beauty of Saddle Mountain with nearby hiking and rock hunting
            opportunities. Our Community Center is the perfect place to connect
            with fellow guests, or you can unwind in the cozy library nook. Stay
            active with our pickleball and tennis courts, take a refreshing swim
            in our pool, or simply soak up the abundant sunshine. Enjoy outdoor
            meals at our picnic tables scattered throughout the park, and let
            your pets have fun in our two dog runs. For your convenience, we
            provide laundry facilities and showers.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nearby communities of Buckeye and Verrado offer a variety of
            shopping and dining options. Escape the hustle and bustle of the city
            and relax at Saddle Mountain RV Park. We look forward to welcoming
            you!
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Saddle Mountain Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Park Models */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Park Models</h3>
              <p className="text-gray-600">
                Our park models are available for rent! Whether you&apos;re
                planning a short getaway or a longer stay, we have the perfect
                space for you. Contact us today for more details!
              </p>
            </div>
            {/* Dormitory */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Dormitory</h3>
              <p className="text-gray-600 text-sm">
                Saddle Mountain offers a dormitory style housing for gentlemen.
                This is a true non-coed dormitory with each guest having their
                own room, but share the large shower and bathroom area. Each room
                contains a table, 2 chairs, small refrigerator, microwave,
                cabinet for the appliances, an extra-long twin bed with mattress
                and mattress cover. There is also a bedside table and table lamp,
                a wall mirror, and a clothes rack.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                Rooms are available on a monthly basis at $800/month (includes
                all utilities). $200 deposit required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay in the Know!</h2>
          <p className="text-gray-600 mb-6">
            Sign up to get the latest listings and upcoming events delivered
            right to your inbox.
          </p>
          <div className="flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
