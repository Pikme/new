
'use client';

const highlights = [
  "Darshan at Mahakaleshwar Jyotirlinga",
  "Comfortable hotel stay",
  "Daily breakfast & dinner",
  "AC private vehicle",
  "Experienced tour coordinator",
];

const itinerary = [
  { day: "Day 1", title: "Arrival & Temple Visit", desc: "Arrival, hotel check-in and evening aarti." },
  { day: "Day 2", title: "Ujjain Sightseeing", desc: "Mahakal, Kal Bhairav, Ram Ghat." },
  { day: "Day 3", title: "Departure", desc: "Breakfast and checkout." },
];

const faqs = [
  { q: "Is darshan guaranteed?", a: "Darshan depends on temple rules and crowd." },
  { q: "Is transport private?", a: "Yes, AC private vehicle included." },
];

export default function Page() {
  return (
    <main className="space-y-10">
      {/* Hero */}
      <section className="bg-gray-100 p-6 rounded-xl">
        <h1 className="text-3xl font-bold">Kurnool to Ujjain Mahakaleshwar Tour</h1>
        <p className="text-gray-600 mt-2">3 Days / 2 Nights</p>
        <button className="mt-4 bg-black text-white px-6 py-2 rounded">Book Now</button>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Tour Highlights</h2>
        <ul className="grid md:grid-cols-2 gap-2 list-disc pl-6">
          {highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </section>

      {/* Itinerary */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Day-wise Itinerary</h2>
        {itinerary.map((d, i) => (
          <div key={i} className="border p-4 rounded mb-3">
            <h3 className="font-bold">{d.day}: {d.title}</h3>
            <p className="text-gray-600">{d.desc}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-semibold mb-3">FAQs</h2>
        {faqs.map((f, i) => (
          <div key={i} className="mb-2">
            <p className="font-medium">{f.q}</p>
            <p className="text-gray-600">{f.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
