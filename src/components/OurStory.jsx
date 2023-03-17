import React from 'react'

const OurStory = () => {
  return (
    <>
      <div className=' grid-cols-1  grid lg:grid-cols-2 bg-slate-300  ' name='about' id='about'>
        <div className="w-[100%] ">
          <img className=' ' src="/img-1.jpeg" alt="imgg" />
        </div>
        <div className=" 2xl:py-10 px-3 py-2 lg:py-4 xl:pt-10 md:py-5 ">
          <h1 className='  flex items-center justify-center text-22xl font-bold 2xl:text-[64px] 2xl:pt-5 2xl:font-bold 2xl:mb-10 2xl:mr-auto md:font-bold text-2xl md:py-6:'>Our Story</h1>
          <p className=' xl:text-xl xl:leading-8 lg:leading-6 px-5 text-justify 2xl:text-22xl 2xl:px-8 2xl:leading-9 md:pt-2 md:leading-10 md:text-lg'>Welcome to our café located in the vibrant Seward neighbourhood of Minneapolis. We pride ourselves on offering a wide variety of beverages and cuisine that are sure to please any palate. Whether you're in the mood for a hot cup of coffee, refreshing tea, or a tasty smoothie, we have something for everyone.
            In addition to our beverages, we offer a delicious selection of sandwiches, bowls, and crepes made with only the highest quality ingredients. Our Somali-style sambusas are a particular customer favorite, packed with flavorful fillings and expertly prepared.</p>
          <a className=' no-underline' target='_blank' href="https://www.capitolcafe23@gmail.com"><button className=' mt-3 mr-auto ml-auto flex md:px-8 px-5 py-3 text-xl rounded-xl bg-yellow-500 hover:bg-yellow-300 cursor-pointer text-white no-underline md:text-2xl font-semibold md:font-bold'>Contact Us</button></a>
        </div>
      </div>

    </>
  )
}

export default OurStory