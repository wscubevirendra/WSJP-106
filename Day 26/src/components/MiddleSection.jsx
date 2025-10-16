import React from 'react'
import ProductCard from './ProductCard'

export default function MiddleSection({ heading, data }) {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-2xl my-6 font-bold'>{heading}</h2>
            <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'>
                {
                    data.map((product, index) => {
                        return (
                            <ProductCard img={product.img} title={product.name} price={product.price} qty={product.qty} key={index} />
                        )
                    })
                }

            </div>
        </div>
    )
}
