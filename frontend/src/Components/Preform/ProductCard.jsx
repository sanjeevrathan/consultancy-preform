import React from "react";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const { product } = props;
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border p-4 rounded-md shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">
          {product.name.toUpperCase()}
        </h2>
        <p className="text-gray-600">NECK: {product.neck}</p>
        <p className="text-gray-600">WEIGHT: {product.kg_pack}/Pack</p>
        <p className="text-gray-600">lITERS: {product.liters}</p>
        <div className="mt-4 flex justify-between items-center">
          {/* <Link to={`/product/${product.id}`}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Click
            </button>
          </Link> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
