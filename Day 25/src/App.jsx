import React, { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState("acc")
  return (
    <div className='w-full bg-amber-100 py-4 px-6'>
      <div className='max-w-7xl mx-auto grid grid-col-1 md:grid-cols-4'>
        <div className='bg-amber-400 flex md:flex-col gap-4 p-2'>
          <button onClick={() => setTab('acc')} className={`px-4 py-2 ${tab == "acc" ? 'bg-blue-500' : 'bg-teal-500'}  cursor-pointer rounded-sm`}>Accound</button>
          <button onClick={() => setTab('contact')} className={`px-4 py-2 ${tab == "contact" ? 'bg-blue-500' : 'bg-teal-500'}  cursor-pointer rounded-sm`}>Contact</button>
          <button onClick={() => setTab('about')} className={`px-4 py-2 ${tab == "about" ? 'bg-blue-500' : 'bg-teal-500'}  cursor-pointer rounded-sm`}>About</button>
        </div>
        <div className='md:col-span-3 bg-gray-500 p-2'>

          {
            tab === "acc" &&
            <div>
              <h1 className='font-bold text-3xl text-white'>Accound Section</h1>
              <p className=' leading-8 py-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dicta nulla a incidunt dolorem assumenda numquam quasi. Excepturi consequuntur ducimus deleniti odio labore facere ullam rem, sit dicta, fugiat at?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet quis eligendi ipsum. Porro, explicabo reprehenderit neque ipsa magni ipsum corporis velit delectus nisi aut iure sit, possimus laudantium officia.
              </p>

            </div>
          }

          {
            tab === "contact" &&
            <div>
              <h1 className='font-bold text-3xl text-white'>Contact Section</h1>
              <p className=' leading-8 py-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dicta nulla a incidunt dolorem assumenda numquam quasi. Excepturi consequuntur ducimus deleniti odio labore facere ullam rem, sit dicta, fugiat at?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet quis eligendi ipsum. Porro, explicabo reprehenderit neque ipsa magni ipsum corporis velit delectus nisi aut iure sit, possimus laudantium officia.
              </p>

            </div>

          }

          {
            tab === "about" &&
            <div>
              <h1 className='font-bold text-3xl text-white'>About Section</h1>
              <p className=' leading-8 py-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dicta nulla a incidunt dolorem assumenda numquam quasi. Excepturi consequuntur ducimus deleniti odio labore facere ullam rem, sit dicta, fugiat at?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet quis eligendi ipsum. Porro, explicabo reprehenderit neque ipsa magni ipsum corporis velit delectus nisi aut iure sit, possimus laudantium officia.
              </p>

            </div>
          }





        </div>
      </div>

    </div>
  )
}


