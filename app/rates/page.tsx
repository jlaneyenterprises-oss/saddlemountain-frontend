import type { Metadata } from "next";
import ReservationForm from "@/components/reservation-form";

export const metadata: Metadata = {
  title: "Rates",
  description:
    "Affordable daily and monthly RV site rates at Saddle Mountain RV Park in Tonopah, AZ. Regular sites from $500/month, premium from $550/month.",
};

const rates = [
  { item: "Regular Site", price: "$500/month" },
  { item: "Premium Site", price: "$550/month" },
  { item: "Regular Site Daily", price: "$50 + tax" },
  { item: "Dorm Room", price: "$800/month" },
  { item: "Dorm Security Deposit", price: "$200" },
  { item: "Yard Storage", price: "$50/month" },
  { item: "RV Storage", price: "$100/month" },
  { item: "Electric", price: "$0.21/kWh + Tax" },
];

const discountClubs = [
  "Campers Card",
  "FMCA",
  "Passport America",
  "Explorer RV Club",
  "Escapees",
  "Military (Active and Veteran)",
  "First Responders & Healthcare",
];

export default function RatesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Rates</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Affordable RV sites with full hookups in Tonopah, Arizona
        </p>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rates.map((rate) => (
              <div
                key={rate.item}
                className="p-5 rounded-lg border border-gray-200 flex justify-between items-center"
              >
                <span className="font-medium">{rate.item}</span>
                <span className="text-primary font-bold">{rate.price}</span>
              </div>
            ))}
          </div>

          {/* Discount Clubs */}
          <div className="mt-10 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">
              Discount Club Memberships
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              We honor the following discount programs:
            </p>
            <div className="flex flex-wrap gap-2">
              {discountClubs.map((club) => (
                <span
                  key={club}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                >
                  {club}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            Please Fill Out The Form Below To Request a Reservation
          </h2>
          <p className="text-gray-600 mb-8">
            We&apos;ll get back to you as soon as possible to confirm
            availability.
          </p>
          <ReservationForm />
        </div>
      </section>
    </>
  );
}
