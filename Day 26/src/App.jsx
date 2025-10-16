import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import CategoryCard from './components/CategoryCard'
import ProductCard from './components/ProductCard'
import MiddleSection from './components/MiddleSection'

export default function App() {
  const dairyBreadEggs = [
    {
      name: "Amul Toned Milk",
      price: 28,
      qty: "500 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71ddb6c0-c8d8-47fb-80d6-e89bce9fd498.png"
    },
    {
      name: "Mother Dairy Curd",
      price: 30,
      qty: "400 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png"
    },
    {
      name: "Britannia Bread",
      price: 40,
      qty: "400 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71ddb6c0-c8d8-47fb-80d6-e89bce9fd498.png"
    },
    {
      name: "Amul Butter",
      price: 58,
      qty: "100 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3af56c86-9a93-4d0c-a8d5-cf38493e4120.png"
    },
    {
      name: "NestFresh Eggs (Pack of 6)",
      price: 65,
      qty: "6 pcs",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/2b146201-870b-4bb8-aee7-8ef0377cbe2b.png"
    },
    {
      name: "Mother Dairy Paneer",
      price: 85,
      qty: "200 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71ddb6c0-c8d8-47fb-80d6-e89bce9fd498.png"
    }
  ];

  const rollingPaperTobacco = [
    {
      name: "RAW Classic Rolling Paper",
      price: 120,
      qty: "50 Leaves",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/71ddb6c0-c8d8-47fb-80d6-e89bce9fd498.png"
    },
    {
      name: "OCB Slim Rolling Paper with Tips",
      price: 150,
      qty: "32 Leaves + Tips",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0f8ebd88-7b67-4542-bda1-87f8182d767d.png"
    },
    {
      name: "Smoking Brown Rolling Paper",
      price: 110,
      qty: "33 Leaves",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/203e20bb-56ee-436c-9d52-c433cc4a2a89.png"
    },
    {
      name: "Elements King Size Slim Rolling Paper",
      price: 160,
      qty: "32 Leaves",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0f8ebd88-7b67-4542-bda1-87f8182d767d.png"
    },
    {
      name: "RAW Filter Tips",
      price: 90,
      qty: "50 Tips",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/203e20bb-56ee-436c-9d52-c433cc4a2a89.png"
    },
    {
      name: "OCB Filter Tips Slim",
      price: 85,
      qty: "50 Tips",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/0f8ebd88-7b67-4542-bda1-87f8182d767d.png"
    },

  ];


  return (
    <>
      <Header />
      <Banner />
      <CategoryCard />
      <MiddleSection heading="Dairy, Bread & Eggs" data={dairyBreadEggs} />
      <MiddleSection heading="Rolling paper & tobacco" data={rollingPaperTobacco} />
      <MiddleSection heading="Dairy, Bread & Eggs" data={dairyBreadEggs} />
      <MiddleSection heading="Rolling paper & tobacco" data={rollingPaperTobacco} />
      <MiddleSection heading="Dairy, Bread & Eggs" data={dairyBreadEggs} />





    </>
  )
}
