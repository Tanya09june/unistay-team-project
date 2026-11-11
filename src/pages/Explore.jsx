
const properties = [
  {
    id: 1,
    name: "Otaniemi Timber Studio A2",
    location: "Espoo • Otaniemi (Aalto University Hub)",
    price: 510,
    type: "Studio",
    furnished: true,
    distance: "3 min walk to Otaniemi Metro",
    tag: "HOAS Partner",
    description: "All utilities & heating included",
    size: "24 m² • Studio • Available 1 Sep",
    amenities: ["Sauna Turn", "100M Fiber", "Bike Storage"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700"
  },
  {
    id: 2,
    name: "Kallio Bohemian Loft Room",
    location: "Helsinki • Kallio & Sörnäinen",
    price: 420,
    type: "Shared Flat Room",
    furnished: true,
    distance: "5 min walk to Sörnäinen Metro",
    tag: "Top Choice",
    description: "Fixed electricity fee €15",
    size: "18 m² • 2-Person Shared • Immediate Move-in",
    amenities: ["Communal Kitchen", "In-building Laundry", "Fast WiFi"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700"
  },
  {
    id: 3,
    name: "Tikkurila Bright Student Loft",
    location: "Vantaa • Tikkurila Transit Hub",
    price: 480,
    type: "1-Bedroom Loft",
    furnished: true,
    distance: "14 min Train to Central Helsinki",
    tag: "Zone B",
    description: "Heating included",
    size: "28 m² • Private Loft • Available 1 Oct",
    amenities: ["Glazed Balcony", "Lift", "Commuter Train 2 min"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700"
  },
  {
    id: 4,
    name: "Kamppi Quiet Courtyard Studio",
    location: "Helsinki • Kamppi & Töölö",
    price: 620,
    type: "Studio",
    furnished: true,
    distance: "4 min to Kamppi Hub",
    tag: "Zone A Prime",
    description: "Sauna & heating included",
    size: "26 m² • Studio • Available 15 Sep",
    amenities: ["Geothermal Heat", "Quiet Courtyard", "Rooftop Sauna"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700"
  },
  {
    id: 5,
    name: "Tapiola Garden Quarter Flat",
    location: "Espoo • Tapiola & Otaniemi",
    price: 390,
    type: "Shared Room",
    furnished: true,
    distance: "6 min bike to Aalto Campus",
    tag: "Budget Pick",
    description: "All inclusive",
    size: "16 m² • 3-Person Shared • Immediate Move-in",
    amenities: ["Sauna Night Tue/Sat", "Near Sello & Metro", "Free Laundry"],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700"
  },
  {
    id: 6,
    name: "Myyrmäki Campus Residence Studio",
    location: "Vantaa • Myyrmäki Hub",
    price: 440,
    type: "Studio",
    furnished: true,
    distance: "400m to Metropolia UAS",
    tag: "Zone B Transit",
    description: "Fiber 100M & water included",
    size: "22 m² • Private Studio • Available 1 Sep",
    amenities: ["Resident Gym", "Direct I-Train Link", "Elevator"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700"
  }
];

import { useState } from "react";

export default function Explore() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All Cities");
  const [saved, setSaved] = useState([]);

  const filteredProperties = properties.filter((home) => {
    const matchesSearch =
      home.name.toLowerCase().includes(search.toLowerCase()) ||
      home.location.toLowerCase().includes(search.toLowerCase());

    const matchesCity =
      city === "All Cities" || home.location.includes(city);

    return matchesSearch && matchesCity;
  });

  const toggleSave = (id) => {
    setSaved((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <div style={{
      background: "#f8f6ed",
      minHeight: "100vh",
      padding: "30px",
      color: "#203719"
    }}>
      <h1 style={{ fontSize: "42px" }}>
        Find Your Next Home in Finland
      </h1>

      <p style={{ fontSize: "18px" }}>
        Verified student apartments across Helsinki, Espoo and Vantaa.
      </p>

      <div style={{ margin: "25px 0" }}>
        <input
          type="text"
          placeholder="Search by property or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "15px",
            width: "100%",
            maxWidth: "500px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        />
      </div>

      <div style={{ marginBottom: "25px" }}>
        {["All Cities", "Helsinki", "Espoo", "Vantaa"].map((item) => (
          <button
            key={item}
            onClick={() => setCity(item)}
            style={{
              padding: "12px 20px",
              margin: "5px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              background: city === item ? "#304725" : "#e9e6da",
              color: city === item ? "white" : "#203719"
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <h2>Showing {filteredProperties.length} verified student homes</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "25px"
      }}>
        {filteredProperties.map((home) => (
          <div key={home.id} style={{
            background: "white",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 3px 12px #00000012"
          }}>
            <img
              src={home.image}
              alt={home.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "20px" }}>
              <span>{home.type}</span>

              <h2>{home.name}</h2>

              <p>{home.location}</p>

              <h1>€{home.price} <small>/ month</small></h1>

              <p>{home.description}</p>

              <p>{home.size}</p>

              <p>{home.distance}</p>

              <p><b>{home.tag}</b></p>

              <p>{home.amenities.join(" • ")}</p>

              <button
                onClick={() => toggleSave(home.id)}
                style={{
                  padding: "12px",
                  width: "100%",
                  background: "#304725",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                {saved.includes(home.id) ? "♥ Saved" : "♡ Save Flat"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
