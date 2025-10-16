import React from "react";

export default function ProductCard({ img, title, qty, price, time }) {
  return (
    <div className="w-[180px] border rounded-md shadow-sm p-3 hover:shadow-md transition-all cursor-pointer">
      {/* Product Image */}
      <img src={img} alt={title} className="w-full  object-contain mb-2" />

      {/* Delivery Time */}
      {time && (
        <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 w-fit px-2 py-[2px] rounded-full mb-1">
          <span>⏱️</span>
          <span>{time}</span>
        </div>
      )}

      {/* Title */}
      <div className="text-sm font-medium text-gray-800 leading-tight mt-1 line-clamp-2">
        {title}
      </div>

      {/* Quantity */}
      <div className="text-xs text-gray-500 mt-1">{qty}</div>

      {/* Price + Button */}
      <div className="flex justify-between items-center mt-2">
        <span className="font-medium text-gray-800">₹{price}</span>
        <button className="border border-green-500 text-green-600 text-sm font-semibold px-3 py-[2px] rounded-md hover:bg-green-50">
          ADD
        </button>
      </div>
    </div>
  );
}
