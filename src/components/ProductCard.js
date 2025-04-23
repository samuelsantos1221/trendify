import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700 mt-1">{product.description}</p>
      <p className="text-xl font-bold mt-2">{`R$ ${product.price.toFixed(2)}`}</p>
      <button 
        onClick={() => onAddToCart(product)} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;