import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Saddle Mountain RV Park in Tonopah, AZ. Call 480-409-8881, email us, or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          If you have any questions, please contact us and we will get back to
          you as soon as possible.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Address Location</h3>
              <p className="text-gray-600">
                40902 W Osborn Rd
                <br />
                Tonopah, AZ 85354
              </p>
              <a
                href="https://www.google.com/maps/place/Saddle+Mountain+RV+Park/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm hover:underline mt-1 inline-block"
              >
                View on Google Maps
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Email Address</h3>
              <a
                href="mailto:Saddlemt@atiaz.com"
                className="text-primary hover:underline"
              >
                Saddlemt@atiaz.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
              <a
                href="tel:+14804098881"
                className="text-primary hover:underline"
              >
                480-409-8881
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
