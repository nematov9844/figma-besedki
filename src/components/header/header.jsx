import React, { useState } from "react";
import { FiMenu, FiPhone } from "react-icons/fi";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className=" bg-black text-white py-3">
        <div className="hidden  md:flex w-full justify-between max-w-[1440px] mx-auto px-4">
          <div className="flex gap-7 items-center">
            <p>Ваш город: Константинополь</p>
            <p>Наш офис: Москва, ул. Новокосимская д.7</p>
          </div>
          <div className="flex flex-wrap  items-center gap-4 justify-center w-[40%]">
            <p>Статьи</p>
            <p>Оплата</p>
            <p>Гарантия</p>
            <p>Дилерам</p>
            <p>Вакансии</p>
          </div>
        </div>
        <div className="md:hidden  w-full px-4 flex items-center  gap-4 justify-between">
         <div onClick={()=>{setToggle(!toggle)}} className={`md:hidden  fixed top-0 left-0 w-full h-screen ${toggle ? "z-10" :"-z-10"}`}>
         <div className={` w-1/2 transition-all ease-linear duration-300 z-20 h-screen justify-start py-5    bg-[rgba(0,0,0,0.4)] backdrop-blur-md  fixed ${toggle ? "left-0": "-left-full"} top-0  flex flex-col`}>
            <div className="flex flex-col text-xl gap-4 px-4">
              <p> Статьи</p>
              <p>Оплата</p>
              <p>Гарантия</p>
              <p>Дилерам</p>
              <p>Вакансии</p>
            </div>
          </div>
         </div>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="w-[10%] text-xl"
          >
            <FiMenu />
          </button>
          <div className="flex border bg-white border-slate-400 rounded-md pl-4">
            <input
              type="text"
              placeholder="Поиск по каталогу..."
              className="bg-transparent outline-none w-full"
            />
            <button className="bg-[#FFD634] px-2 py-1">Найти</button>
          </div>
          <button className=" flex justify-center w-[10%] text-xl">
            <FiPhone />
          </button>
        </div>
      </div>
      <div className="hidden mt-5 md:flex md:flex-col lg:flex-row  md:w-full lg:flex  gap-5  w-full max-w-[1440px] px-4 mx-auto justify-center items-center">
        <div className="flex   flex-col justify-center w-4/5 items-center">
          <div className="flex gap-4">
            <div className="w-[30px] h-[30px] bg-orange-600"></div>
            <div className="w-[30px] h-[30px] bg-black"></div>
            <div className="w-[30px] h-[30px] bg-yellow-500"></div>
          </div>
          <div>
            <h1>Логотип вашего магазина</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-full max-w-[900px]  gap-2 ">
            <p>Лучшие цены</p>
            <p>Бесплатная доставка</p>
            <p>Гарантия от 3х лет</p>
            <p>Более 1 000 товаров</p>
          </div>
          <div className="flex border border-slate-400 w-4/ lg:w-full md:mx-auto rounded-md pl-4">
            <input
              type="text"
              placeholder="Поиск по каталогу..."
              className="bg-transparent outline-none w-full"
            />
            <button className="bg-[#FFD634] px-2 py-1">Найти</button>
          </div>
        </div>
        <div className="flex gap-4 w-4/5 md:justify-center ">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl">Ежедневно с 9:00 до 21:00</h1>
            <p>8 (800) 800-00-00</p>
            <p>8 (495) 700-00-00</p>
          </div>
          <div className="flex md:flex-col gap-4">
            <p>youremail@mailbox.ru</p>
            <button className="bg-[#FF7A1B] py-3 px-4 text-white rounded-md">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
