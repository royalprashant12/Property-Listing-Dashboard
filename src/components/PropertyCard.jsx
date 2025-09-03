import React from "react";

function PropertyCard({ property, onView }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold">{property.name}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="font-semibold">${property.price.toLocaleString()}</p>
        <p className="text-sm text-gray-600">
          {property.description.slice(0, 50)}...
        </p>
      </div>
      <button
        onClick={onView}
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
      >
        View
      </button>
    </div>
  );
}

export default PropertyCard;
