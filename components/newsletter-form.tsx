"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now just show success — newsletter integration can be added later
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Subscribe
      </button>
      {status === "success" && (
        <p className="text-green-600 text-sm self-center">Subscribed!</p>
      )}
    </form>
  );
}
