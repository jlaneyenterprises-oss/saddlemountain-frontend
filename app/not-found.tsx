import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 px-4 text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded font-medium hover:bg-primary/90 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
