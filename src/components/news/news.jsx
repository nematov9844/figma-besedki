import React from 'react'

export default function News() {
    const data = [
        {
            id:1,
            img:"https://img.freepik.com/free-photo/aokigahara-forest-highly-detailed-style_23-2151570310.jpg",
            title:"Как выбрать беседку для дачи",
            date:"19 сентября 2021",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing congue tortor bibendum condimentum sociis lorem. Nibh ut ornare nec est pharetra, tortor egestas quam non. Aenean felis sed mauris eu. Nisi pellentesque.",
            btn:"Читать далее >"
        },
        {
            id:2,
            img:"https://img.freepik.com/free-photo/aokigahara-forest-highly-detailed-style_23-2151570310.jpg",
            title:"Как выбрать беседку для дачи",
            date:"19 сентября 2021",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing congue tortor bibendum condimentum sociis lorem. Nibh ut ornare nec est pharetra, tortor egestas quam non. Aenean felis sed mauris eu. Nisi pellentesque.",
            btn:"Читать далее >"
        },
        {
            id:3,
            img:"https://img.freepik.com/free-photo/aokigahara-forest-highly-detailed-style_23-2151570310.jpg",
            title:"Как выбрать беседку для дачи",
            date:"19 сентября 2021",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing congue tortor bibendum condimentum sociis lorem. Nibh ut ornare nec est pharetra, tortor egestas quam non. Aenean felis sed mauris eu. Nisi pellentesque.",
            btn:"Читать далее >"
        },
        {
            id:4,
            img:"https://img.freepik.com/free-photo/aokigahara-forest-highly-detailed-style_23-2151570310.jpg",
            title:"Как выбрать беседку для дачи",
            date:"19 сентября 2021",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing congue tortor bibendum condimentum sociis lorem. Nibh ut ornare nec est pharetra, tortor egestas quam non. Aenean felis sed mauris eu. Nisi pellentesque.",
            btn:"Читать далее >"
        },
        {
            id:5,
            img:"https://img.freepik.com/free-photo/aokigahara-forest-highly-detailed-style_23-2151570310.jpg",
            title:"Как выбрать беседку для дачи",
            date:"19 сентября 2021",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing congue tortor bibendum condimentum sociis lorem. Nibh ut ornare nec est pharetra, tortor egestas quam non. Aenean felis sed mauris eu. Nisi pellentesque.",
            btn:"Читать далее >"
        },
        {
            id:6,
            img:"https://img.freepik.com/free-photo/aokigahara-forest-highly-detailed-style_23-2151570310.jpg",
            title:"Как выбрать беседку для дачи",
            date:"19 сентября 2021",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing congue tortor bibendum condimentum sociis lorem. Nibh ut ornare nec est pharetra, tortor egestas quam non. Aenean felis sed mauris eu. Nisi pellentesque.",
            btn:"Читать далее >"
        },
    ]
  return (
    <div className='flex flex-col gap-4 max-w-[1440px] w-full mx-auto px-4'>
      <div>
        <h1 className='text-xl font-medium'>Статьи, новости и обзоры</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {
            data.map(item=>(
                <div className='flex flex-col gap-4'>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <div>
                        <h1 className='text-[#FF7A1B] text-xl font-medium'>{item.title}</h1>
                        <p className='text-[#BBBBBB]'>{item.date}</p>
                        </div>
                        <p>{item.desc}</p>
                        <button className='text-[#FF7A1B]'>{item.btn}</button>
                    </div>
                </div>
            )
                
            )
        }
      </div>
    </div>
  )
}
