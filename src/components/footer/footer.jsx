import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white">
    <div>
    <div>
        <div className="flex flex-col gap-4">
          {" "}
          <div>
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
            <div></div>
          </div>
          <div>
            <p>Наш адрес:</p>
            <p>Москва, ул. Новокосимская д.7</p>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
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
        </div>
      </div>
      <div></div>
    </div>
    </div>
  );
}
