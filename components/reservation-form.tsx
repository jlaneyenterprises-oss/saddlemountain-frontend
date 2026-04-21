"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReservationForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      checkIn: (form.elements.namedItem("checkIn") as HTMLInputElement).value,
      checkOut: (form.elements.namedItem("checkOut") as HTMLInputElement).value,
      rvType: (form.elements.namedItem("rvType") as HTMLInputElement).value,
      ageOfResidents: (form.elements.namedItem("ageOfResidents") as HTMLInputElement).value,
      ageOfRv: (form.elements.namedItem("ageOfRv") as HTMLInputElement).value,
      numberOfPets: (form.elements.namedItem("numberOfPets") as HTMLInputElement).value,
      numberOfPeople: (form.elements.namedItem("numberOfPeople") as HTMLInputElement).value,
      specialRequests: (form.elements.namedItem("specialRequests") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium mb-1">
            Check-in Date *
          </label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium mb-1">
            Check-out Date *
          </label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rvType" className="block text-sm font-medium mb-1">
            Type of RV *
          </label>
          <input
            id="rvType"
            name="rvType"
            type="text"
            required
            placeholder="e.g. Class A, Fifth Wheel"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="ageOfRv" className="block text-sm font-medium mb-1">
            Age of RV *
          </label>
          <input
            id="ageOfRv"
            name="ageOfRv"
            type="text"
            required
            placeholder="e.g. 2019"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="ageOfResidents" className="block text-sm font-medium mb-1">
            Age of Residents *
          </label>
          <input
            id="ageOfResidents"
            name="ageOfResidents"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="numberOfPets" className="block text-sm font-medium mb-1">
            Number of Pets *
          </label>
          <input
            id="numberOfPets"
            name="numberOfPets"
            type="text"
            required
            placeholder="0"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="numberOfPeople" className="block text-sm font-medium mb-1">
            Number of People *
          </label>
          <input
            id="numberOfPeople"
            name="numberOfPeople"
            type="number"
            min="1"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium mb-1">
          Special Requests
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Any special requests or questions..."
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="bg-primary text-white px-8 py-3 rounded font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Submit Reservation Request"}
      </button>
    </form>
  );
}
