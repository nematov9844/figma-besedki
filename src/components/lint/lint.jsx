import React from "react";
import Img1 from "../../assets/icon1.png";
import Img2 from "../../assets/icon2.png";
import Img3 from "../../assets/icon3.png";
import Img4 from "../../assets/icon4.png";
import Img5 from "../../assets/icon5.png";
export default function Lint() {
  const data = [
    {
      id: 1,
      img: Img1,
      title: "Изготовливаем конструкциипо вашему дизайн-проекту",
    },
    {
      id: 1,
      img: Img2,
      title: "Изготовливаем конструкциипо вашему дизайн-проекту",
    },
    {
      id: 1,
      img: Img3,
      title: "Изготовливаем конструкциипо вашему дизайн-проекту",
    },
    {
      id: 1,
      img: Img4,
      title: "Изготовливаем конструкциипо вашему дизайн-проекту",
    },
    {
      id: 1,
      img: Img5,
      title: "Изготовливаем конструкциипо вашему дизайн-проекту",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center md:justify-between max-w-[1440px] mx-auto">
      {data.map((item) => {
        return (
          <div className="flex  w-full max-w-[230px] mt-4 items-center max-h-[230px]  ">
            <img className="h-[75px] w-[75px] m-auto" src={item.img} alt="sdfsgdh" />
            <h1 className="font-medium text-xs ">{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
