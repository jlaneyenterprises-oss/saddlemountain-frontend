import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your reservation request has been received.",
};

export default function ThankYouPage() {
  return (
    <section className="py-24 px-4 text-center">
      <div className="max-w-lg mx-auto">
        <div className="text-5xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-4">
          Thank You for Your Reservation Request!
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          We&apos;ve received your submission and our team will be in touch
          shortly to confirm the details. We&apos;re excited to welcome you to
          Saddle Mountain and look forward to making your stay enjoyable.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
