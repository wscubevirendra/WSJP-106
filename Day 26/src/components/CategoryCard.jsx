import React from 'react'

export default function CategoryCard() {
    const blinkitCategories = [
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },
        {
            img: "images/paan.jpg",

        },

    ];

    return (
        <div className='max-w-7xl grid grid-cols-5 lg:grid-cols-10 mx-auto'>
            {
                blinkitCategories.map((category, index) => {
                    return <img src={category.img} alt="" key={index} />
                })
            }
        </div>
    )
}
