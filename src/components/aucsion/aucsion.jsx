import React, { useState } from "react";

export default function Aucsion({products}) {
  const navData = [
    { id: 1, name: "Беседки" },
    { id: 2, name: "Бани" },
    { id: 3, name: "Площадки" },
    { id: 4, name: "Дома" },
    { id: 5, name: "Перголы" },
    { id: 6, name: "Бренды" },
  ]


  
  
  return (
    <div className="w-full max-w-[1400px] px-4 mx-auto mb-4">
      <div className="flex gap-4 flex-col">
        <h1 className="text-xl font-bold">Хиты продаж</h1>
        <div className="flex gap-4 flex-wrap">
          {navData.map((item) => (
            <p
              key={item.id}
              className="bg-gray-300 border-b-2 p-2 hover:bg-gray-400 rounded-md hover:text-gray-800 text-gray-600 border-gray-400 cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <div className="text-sm text-gray-600 mt-2 space-y-1">
                <p><span className="font-semibold">Размеры:</span> {product.dimensions}</p>
                <p><span className="font-semibold">Площадь:</span> {product.area}</p>
                <p><span className="font-semibold">Вместимость:</span> {product.capacity}</p>
                <p><span className="font-semibold">Гарантия:</span> {product.warranty}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-gray-400 line-through text-sm">{product.oldPrice}</p>
                  <p className="text-xl font-bold text-yellow-600">{product.newPrice}</p>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md">
                  Купить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
