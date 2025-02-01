import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  if (!products || products.length === 0) {
    return <p className="text-gray-500">No products available. Add some!</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
        >
          {/* Product details */}
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-sm text-gray-600">${product.price}</p>
            <p className="text-sm text-gray-600">Stock: {product.stock}</p>
          </div>

          {/* Action buttons */}
          <div className="flex mt-4 space-x-2">
            <button
              onClick={() => onEdit(product)}
              className="flex-1 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product._id)}
              className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
