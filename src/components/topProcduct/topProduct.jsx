import React, { useState } from "react";

export default function TopProduct() {
  const navData = [
    { id: 1, name: "Беседки" },
    { id: 2, name: "Бани" },
    { id: 3, name: "Площадки" },
    { id: 4, name: "Дома" },
    { id: 5, name: "Перголы" },
    { id: 6, name: "Бренды" },
  ]

  const products = [
    {
      id: "0000001",
      name: "Название товара длинное в две строки наверное",
      dimensions: "12.3 x 14.6 x 4.3 м.",
      area: "33 м²",
      capacity: "15 чел.",
      warranty: "10 лет",
      oldPrice: "6 127 500 ₽",
      newPrice: "5 023 900 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
    {
      id: "0000002",
      name: "Короткое название товара",
      dimensions: "10 x 12 x 3 м.",
      area: "25 м²",
      capacity: "10 чел.",
      warranty: "8 лет",
      oldPrice: "5 500 000 ₽",
      newPrice: "4 200 000 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
    {
      id: "0000003",
      name: "Ещё один товар",
      dimensions: "11 x 15 x 4 м.",
      area: "28 м²",
      capacity: "12 чел.",
      warranty: "5 лет",
      oldPrice: "3 800 000 ₽",
      newPrice: "3 000 000 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
    {
      id: "0000004",
      name: "Длинное название товара в две строки",
      dimensions: "13 x 14 x 5 м.",
      area: "34 м²",
      capacity: "14 чел.",
      warranty: "12 лет",
      oldPrice: "7 000 000 ₽",
      newPrice: "5 600 000 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
    {
      id: "0000005",
      name: "Название товара ещё длинное",
      dimensions: "12 x 12 x 4 м.",
      area: "30 м²",
      capacity: "13 чел.",
      warranty: "7 лет",
      oldPrice: "6 200 000 ₽",
      newPrice: "5 000 000 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
    {
      id: "0000006",
      name: "Короткое название товара",
      dimensions: "11 x 10 x 4 м.",
      area: "22 м²",
      capacity: "8 чел.",
      warranty: "6 лет",
      oldPrice: "4 500 000 ₽",
      newPrice: "3 500 000 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
    {
      id: "0000007",
      name: "Товар с особым названием",
      dimensions: "13 x 14 x 3.5 м.",
      area: "27 м²",
      capacity: "11 чел.",
      warranty: "9 лет",
      oldPrice: "5 700 000 ₽",
      newPrice: "4 600 000 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
    {
      id: "0000008",
      name: "Товар для особых клиентов",
      dimensions: "10 x 13 x 3.5 м.",
      area: "20 м²",
      capacity: "10 чел.",
      warranty: "5 лет",
      oldPrice: "3 000 000 ₽",
      newPrice: "2 500 000 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
    {
      id: "0000009",
      name: "Большой товар с длинным названием",
      dimensions: "14 x 15 x 4 м.",
      area: "40 м²",
      capacity: "20 чел.",
      warranty: "15 лет",
      oldPrice: "10 000 000 ₽",
      newPrice: "8 000 000 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
    {
      id: "0000010",
      name: "Просто товар",
      dimensions: "9 x 9 x 3 м.",
      area: "18 м²",
      capacity: "7 чел.",
      warranty: "3 года",
      oldPrice: "2 800 000 ₽",
      newPrice: "2 300 000 ₽",
      img: "https://s3-alpha-sig.figma.com/img/4619/09e8/cc717fd41b72c36aa4ade2716f988cad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3YLLzTzI-WjJuYC9UHLtug15bTseF19pqKQjKfutwfmZSPNRh86BCuFbXvVdYEigSpIVZa-UDerIYxJfJzdQPtb80FFS0El~9GOjM~zm0pza6FQdCMD-uqEZyHvwVX99gzHNrHTvXe3C-6jkftPYqz1yCa7MtWUVc3zOI8YdW5j1~6MFNF9Ug0BSQlE7twRdtbJAXGYruzrL998J-O2XjTSSyIbX1fiWf08DR4jEKxRZUP-WPBxYGcLrmTnkc9Hxe4g2P4~7K5jga8NU8SMfCQaX~V0~IIjGqvcCNW12gzRCWmvagxsv-W6vOCbQ0kwCwK9o7ksKMagCIkduvZ7KQ__",
    },
  ];
  
  
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
                  <p className="text-xl font-bold text-red-600">{product.newPrice}</p>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md">
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
