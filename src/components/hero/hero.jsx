import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import BgTree from "../../assets/bg-tree.png";
import BgHome from "../../assets/home.png";

export default function Hero() {
  const [btn, setBtn] = useState(false);
  let MtText = "Выгода до 24% Сборка за 1 день";
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 font-semibold">
      <div>
        <div className="w-full hidden justify-between md:flex">
          <button className="bg-[#FFD634] px-3 py-1 flex items-center gap-4">
            <p className="text-white">
              <FiMenu />
            </p>{" "}
            Каталог товаров
          </button>
          <button>О компании</button>
          <button>Отзывы</button>
          <button>Наши работы</button>
          <button>Доставка</button>
          <button>Контакты</button>
        </div>

        <div className="relative bg-red-500 w-full -z-0 md:hidden">
          <button
            onClick={() => setBtn(!btn)}
            className="bg-[#FFD634] w-full justify-start px-3 py-2 flex items-center gap-4"
          >
            <p className="text-white">
              <FiMenu />
            </p>
            <p className="w-full flex justify-center">Каталог товаров</p>
          </button>
          <div
            className={`bg-red-500 transition-all ease-linear duration-300 -z-20 ${
              btn ? "top-10 opacity-100" : "-top-10 opacity-0"
            } absolute top-10 left-0 flex flex-col items-start px-3`}
          >
            <button>О компании</button>
            <button>Отзывы</button>
            <button>Наши работы</button>
            <button>Доставка</button>
            <button>Контакты</button>
          </div>
        </div>

        <div
          className={`flex relative mt-5 after:w-full after:h-[50px] after:bg-orange-500 after:absolute after:bottom-10 after:left-0`}
        >
          <div
            className="w-4/5 h-[47vh] -z-20 md:p-4"
            style={{
              clipPath: "polygon(0 0, 100% 0%, 80% 100%, 0% 100%)",
              backgroundImage: `url(${BgTree})`,
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-white text-4xl md:text-6xl mt-4 ml-4 md:ml-7 md:mt-7  w-[80%] md:w-[40%] text-start">
              Беседки под ключ за 7 дней
            </h1>
          </div>
          <div className="w-[40%] md:block hidden absolute z-30 right-16 top-0 h-56">
            <img
              className="w-full h-full mt-5 lg:w-auto lg:h-auto lg:m-0"
              src={`${BgHome}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
