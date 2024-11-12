import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 ">
        <div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 md:grid-cols-4">
              <div className="flex   flex-col justify-center w-4/5 items-center">
                <div className="flex gap-4">
                  <div className="rounded-md w-[30px] h-[30px] bg-orange-600"></div>
                  <div className="rounded-md w-[30px] h-[30px] bg-white"></div>
                  <div className="rounded-md w-[30px] h-[30px] bg-yellow-500"></div>
                </div>
                <div>
                  <h1>Логотип вашего магазина</h1>
                </div>
              </div>
              <div>
                <p>Наш адрес:</p>
                <p>Москва, ул. Новокосимская д.7</p>
              </div>
              <div className="flex flex-col items-start  justify-center">
                <p>График работы:</p>
                <p>Ежедневно с 9:00 до 21:00</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-[#FF7A1B] py-1 px-4 text-white">Заказать звонок</button>
              </div>
            </div>
            <div>
              <p>Наш адрес:</p>
              <p>Москва, ул. Новокосимская д.7</p>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-center items-start ">
            <div>
              <p>Для покупателей:</p>
              <p>Доставка</p>
              <p>Гарантия</p>
              <p>Политика конфиденциальности</p>
              <p>Отзывы</p>
              <p>Наши работы</p>
            </div>
            <div>
              <p>О компании:</p>
              <p>О Нас</p>
              <p>Доставка и оплата</p>
              <p>Наши работы</p>
              <p>Контакты</p>
              <p>Гарантия</p>
            </div>
            <div>
              <p>Категории:</p>
              <p>Беседки</p>
              <p>Бани</p>
              <p>Площадки</p>
              <p>Дома</p>
              <p>Перголы</p>
            </div>
          <div className="flex gap-4 w-4/5 flex-col lg:flex-row md:justify-center ">
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
        <div></div>
      </div>
    </div>
  );
}
