import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$10', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$30', imageUrl: 'https://via.placeholder.com/150' },
];

const CardLayout = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {products.map((product) => (
        <div key={product.id} className='card border p-4 rounded-md shadow-md'>
          <img
            src={product.imageUrl}
            alt={product.name}
            className='w-full h-32 object-cover mb-4'
          />
          <h2 className='text-xl font-semibold'>{product.name}</h2>
          <p className='text-lg text-gray-600'>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CardLayout;
