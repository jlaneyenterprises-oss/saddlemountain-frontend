import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Saddle Mountain!
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Your home away from home in the beautiful Arizona desert
        </p>
        <Link
          href="/explore"
          className="inline-block bg-primary text-white px-8 py-3 rounded text-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Discover More
        </Link>
      </div>
    </section>
  );
}
