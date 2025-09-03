import React from "react";

function PropertyModal({ property, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <button className="float-right text-red-500" onClick={onClose}>
          X
        </button>
        <h2 className="text-xl font-bold mb-2">{property.name}</h2>
        <img
          src={property.image}
          alt={property.name}
          className="rounded mb-3"
        />
        <p>
          <strong>Location:</strong> {property.location}
        </p>
        <p>
          <strong>Price:</strong> ${property.price.toLocaleString()}
        </p>
        <p className="mt-2">{property.description}</p>
      </div>
    </div>
  );
}

export default PropertyModal;
