import React, { useState } from "react";
import axios from "axios";

function AddPropertyForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    price: "",
    location: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/properties", {
      ...form,
      price: Number(form.price),
    });
    onAdd();
    setForm({
      name: "",
      type: "",
      price: "",
      location: "",
      description: "",
      image: "",
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-lg font-bold mb-3">Add Property</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Property Name"
          className="border p-2 rounded"
        />
        <input
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Type"
          className="border p-2 rounded"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 rounded"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded col-span-2"
        />
        <button className="col-span-2 bg-green-600 text-white py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPropertyForm;
