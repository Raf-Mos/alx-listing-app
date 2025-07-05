import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  price, 
  rating, 
  location, 
  onClick 
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {rating && (
          <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 shadow-md">
            <span className="text-sm font-semibold flex items-center">
              ⭐ {rating}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        {location && (
          <p className="text-gray-500 text-sm mb-2">📍 {location}</p>
        )}
        
        {price && (
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${price}
              <span className="text-sm font-normal text-gray-500">/night</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
