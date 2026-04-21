import Link from "next/link";
import NewsletterForm from "./newsletter-form";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h3 className="text-lg font-semibold mb-2">Stay in the Know!</h3>
          <p className="text-gray-300 text-sm mb-4">
            Sign up to get the latest listings and upcoming events delivered
            right to your inbox.
          </p>
          <div className="flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/explore" className="text-gray-300 hover:text-white text-sm">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-gray-300 hover:text-white text-sm">
                  Amenities
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rates" className="text-gray-300 hover:text-white text-sm">
                  Rates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>40902 W Osborn Rd</li>
              <li>Tonopah, AZ 85354</li>
              <li>
                <a href="tel:+14804098881" className="hover:text-white">
                  480-409-8881
                </a>
              </li>
              <li>
                <a href="mailto:Saddlemt@atiaz.com" className="hover:text-white">
                  Saddlemt@atiaz.com
                </a>
              </li>
            </ul>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Saddle-Mountain-RV-Park-61563985815301/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-gray-300 hover:text-white"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            Copyright &copy; {new Date().getFullYear()} Saddle Mountain RV Park.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
