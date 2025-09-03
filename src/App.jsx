import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./components/PropertyCard";
import AddPropertyForm from "./components/AddPropertyForm";
import PropertyModal from "./components/PropertyModal";

function App() {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const fetchProperties = async () => {
    const res = await axios.get("http://localhost:5000/properties");
    setProperties(res.data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const filtered = properties.filter((p) =>
    (filter ? p.type === filter : true) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) ||
     p.location.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mini Property Listing Dashboard</h1>
      </div>

      <div className="flex gap-4 mb-4">
        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Filter by Type</option>
          <option value="Plot">Plot</option>
          <option value="Shed">Shed</option>
          <option value="Retail Store">Retail Store</option>
        </select>

        <input
          type="text"
          placeholder="Search by name or location"
          className="border p-2 rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Property List */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {filtered.map((p) => (
          <PropertyCard key={p.id} property={p} onView={() => setSelected(p)} />
        ))}
      </div>

      {/* Add Property */}
      <AddPropertyForm onAdd={fetchProperties} />

      {/* View Modal */}
      {selected && (
        <PropertyModal property={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default App;
