import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default Card;
