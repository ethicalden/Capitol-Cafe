import React from 'react'

const OurStory = () => {
  return (
    <>
      <div className=' grid-cols-1  grid lg:grid-cols-2 bg-slate-300  '>
        <div className="w-[100%] ">
          <img className=' ' src="/img-1.jpeg" alt="imgg" />
        </div>
        <div className=" 2xl:py-10 px-3 py-2 lg:py-4 xl:pt-10 md:py-5 ">
          <h1 className='  flex items-center justify-center text-22xl font-bold 2xl:text-[64px] 2xl:pt-5 2xl:font-bold 2xl:mb-10 2xl:mr-auto md:font-bold text-2xl md:py-6:'>Our Story</h1>
          <p className=' xl:text-xl xl:leading-8 lg:leading-6 px-5 text-justify 2xl:text-22xl 2xl:px-8 2xl:leading-9 md:pt-2 md:leading-10 md:text-lg'>Welcome to our café located in the vibrant Seward neighbourhood of Minneapolis. We pride ourselves on offering a wide variety of beverages and cuisine that are sure to please any palate. Whether you're in the mood for a hot cup of coffee, refreshing tea, or a tasty smoothie, we have something for everyone.
            In addition to our beverages, we offer a delicious selection of sandwiches, bowls, and crepes made with only the highest quality ingredients. Our Somali-style sambusas are a particular customer favorite, packed with flavorful fillings and expertly prepared.</p>
          <button className=' mt-3 mr-auto ml-auto flex md:px-8 px-5 py-3 text-xl rounded-xl bg-yellow-500 hover:bg-yellow-300 cursor-pointer md:text-2xl font-semibold md:font-bold'>Contact Us</button>
        </div>
      </div>
      <div className='text-center py-10 px-10'>
        <h1 className=' font-bold md:font-bold text-[56px] 2xl:text-[64px] 2xl:pt-8 2xl:pb-2'>Menu</h1>
        <p className=' text-[19px] font-normal 2xl:leading-relaxed-[140%] 2xl:leading-8  font-sans 2xl:text-center 2xl:px-[25rem] leading-6'>
          Start your day with our freshly brewed coffee or tea, or try one of our refreshing smoothies made with a variety of fruits and vegetables. Our sandwiches are made with freshly baked bread and filled with a variety of meats, cheeses, and veggies, or try our popular bowls filled with grains, veggies, and proteins for a healthy and filling meal.
        </p>
      </div>
    </>
  )
}

export default OurStory