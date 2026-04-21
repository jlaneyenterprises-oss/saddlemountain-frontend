export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RVPark",
    name: "Saddle Mountain RV Park",
    description:
      "RV park in Tonopah, Arizona offering spacious sites with full hookups, pool, pickleball and tennis courts, community center, and serene desert setting near Buckeye and Verrado.",
    url: "https://www.saddlemountainrv.com",
    telephone: "+1-480-409-8881",
    email: "Saddlemt@atiaz.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "40902 W Osborn Rd",
      addressLocality: "Tonopah",
      addressRegion: "AZ",
      postalCode: "85354",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.4514,
      longitude: -112.9577,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Full Hookups", value: true },
      { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pickleball Courts", value: true },
      { "@type": "LocationFeatureSpecification", name: "Tennis Courts", value: true },
      { "@type": "LocationFeatureSpecification", name: "Community Center", value: true },
      { "@type": "LocationFeatureSpecification", name: "Laundry Facilities", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dog Runs", value: true },
      { "@type": "LocationFeatureSpecification", name: "Showers", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
    ],
    sameAs: [
      "https://www.facebook.com/p/Saddle-Mountain-RV-Park-61563985815301/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
