import { useState } from "react";

const Filter = ({ filter, setFilter }: any) => (
  <div className="flex items-center mb-6">
    <input
      type="text"
      placeholder="Filter tasks..."
      className="border border-gray-300 rounded px-3 py-1 mr-4 w-1/4"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
    <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded mr-2">
      Status
    </button>
    <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded">
      Priority
    </button>
  </div>
);

export default Filter;
