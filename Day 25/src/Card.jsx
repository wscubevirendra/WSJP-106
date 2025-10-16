import React from 'react'

export default function Card() {
    return (
        <div className='max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 px-4 py-6'>
            {
                [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12].map(
                    (data, index) => {
                        return (
                            <div className='p-6  text-4xl bg-teal-500 shadow-xl rounded-xl text-white'>{data}</div>
                        )
                    }
                )
            }


        </div>
    )
}
