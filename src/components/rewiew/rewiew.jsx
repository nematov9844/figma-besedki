import React from 'react'
import { IoIosStar } from 'react-icons/io'

export default function Rewiew() {
    const data = [
        {
            id:1,
            name:"Алексей С.А.",
            date:"28 июня 2021",
            ball:"Общая оценка: (4,8) ",
            desc:"«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
            btn:"Читать полностью"
        },
        {
            id:2,
            name:"Алексей С.А.",
            date:"28 июня 2021",
            ball:"Общая оценка: (4,8) ",
            desc:"«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
            btn:"Читать полностью"
        },
        {
            id:3,
            name:"Алексей С.А.",
            date:"28 июня 2021",
            ball:"Общая оценка: (4,8) ",
            desc:"«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
            btn:"Читать полностью"
        }
    ]
  return (
    <div className='max-w-[1400px] px-4 mx-auto w-full'>
      <div className='my-4'>
        <h1 className='text-xl font-bold'>Отзывы наших клиентов</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
{
    data.map(item=>{
        return (
            <div>
                <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-4 '>
                        <h1 className='text-xl'>{item.name}</h1>
                        <p className='text-xs text-gray-500'>{item.date}</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-yellow-500 flex'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></h1>
                        <p >{item.ball}</p>
                    </div>
                </div>
                <div>
                    <p>{item.desc}</p>
                    <button className='text-yellow-500'>{item.btn}</button>
                </div>
            </div>
        )
    })
}

      </div>
      <div className='flex w-full justify-center items-center'>
        <button className='bg-[#FF7A1B] py-1 px-3 text-white text-xs'>Открыть все отзывы</button>
      </div>
    </div>
  )
}
