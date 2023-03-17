import React from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const CardCarousal = () => {
  return (
    <div className='' name='menu' id='menu'>
      <div className="mobDesign block lg:hidden" name='menu' id='menu'><MobileDesign /></div>
      <div className="lapDesign hidden lg:block" name='menu' id='menu'> <LaptopDesign /></div>
    </div>
  )
}

export default CardCarousal



const LaptopDesign = () => {
  return (
    <>
      <div className='text-center py-10 px-10'>
        <h1 className=' font-bold md:font-bold text-[56px] 2xl:text-[64px] 2xl:pt-8 2xl:pb-2'>Menu</h1>
        <p className=' text-[19px] font-normal 2xl:leading-relaxed-[140%] 2xl:leading-8  font-sans 2xl:text-center 2xl:px-[25rem] leading-6'>
          Start your day with our freshly brewed coffee or tea, or try one of our refreshing smoothies made with a variety of fruits and vegetables. Our sandwiches are made with freshly baked bread and filled with a variety of meats, cheeses, and veggies, or try our popular bowls filled with grains, veggies, and proteins for a healthy and filling meal.
        </p>
      </div>
      <div id="carouselExampleControls" className="carousel carousel-dark slide relative" data-bs-ride="carousel" data-interval="1000" name='menu'>
        <ol className="carousel-indicators absolute -bottom-5">
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex justify-content-around" >
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img1.jpeg" className="card-img-top" alt="..." />
                <div className="card-body  text-center font-extrabold text-xl">
                  <h5 className="card-title">Oodkac</h5>
                  <p className="  text-center">$12</p>
                </div>

              </div><div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img2.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Chai Latte</h5>
                  <p className=" text-center">$8</p>
                </div>
              </div>
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img3.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Black Tea</h5>
                  <p className="  text-center">$15</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex   justify-content-around">
              <div className="card border-none " style={{ width: "18rem" }}>
                <img src="/carousal/img4.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Tandoori Chicken</h5>
                  <p className="  text-center">$10</p>
                </div>
              </div><div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img5.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Malwax Wrap Chicken</h5>
                  <p className="  text-center">$12</p>
                </div>
              </div>
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img6.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Mango Banana Smoothie</h5>
                  <p className=" text-center">$10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img7.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Sambusa Filled With Meat</h5>
                  <p className="  text-center">$15</p>
                </div>
              </div>
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img8.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Sambusa Filled With Vegetables</h5>
                  <p className=" text-center">$10</p>
                </div>
              </div>
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img9.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Tuna Sandwitch with Salad</h5>
                  <p className=" text-center">$12</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex justify-content-around" >
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img10.jpg" className="card-img-top" alt="..." />
                <div className="card-body  text-center font-extrabold text-xl">
                  <h5 className="card-title">Malawax Flavored Crepe - Strawberry</h5>
                  <p className=" text-center">$8</p>
                </div>

              </div><div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img11.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Salad Bowl</h5>
                  <p className=" text-center">$15</p>
                </div>
              </div>
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img12.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Malwax Wrap -Egg</h5>
                  <p className=" text-center">$10</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div >
      <div className=' text-center mt-20'>
        <a target='_blank' href="https://capitolcafe.menufy.com/">
          <button className=' rounded-2xl text-center px-10 py-2 text-xl font-bold hover:text-gray-700 bg-yellow-400 hover:bg-yellow-500 border-2 border-gray-700'>Click Here</button>
        </a>
      </div>

    </>
  )
}


export const MobileDesign = () => {
  return (
    <>
      <div className='text-center py-10 px-10'>
        <h1 className=' font-bold md:font-bold text-[56px] 2xl:text-[64px] 2xl:pt-8 2xl:pb-2'>Menu</h1>
        <p className=' text-[19px] font-normal 2xl:leading-relaxed-[140%] 2xl:leading-8  font-sans 2xl:text-center 2xl:px-[25rem] leading-6'>
          Start your day with our freshly brewed coffee or tea, or try one of our refreshing smoothies made with a variety of fruits and vegetables. Our sandwiches are made with freshly baked bread and filled with a variety of meats, cheeses, and veggies, or try our popular bowls filled with grains, veggies, and proteins for a healthy and filling meal.
        </p>
      </div>
      <div>
        <Carousel showStatus={false} autoPlay={true} interval={3000} infiniteLoop={true}>
          <div className='secFour_Container ' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img1.jpeg' alt='' />
              <div className="card-body  text-center font-extrabold text-xl">
                <h5 className="card-title">Oodkac</h5>
                <p className="  text-center">$12</p>
              </div>
            </div>
          </div>

          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img2.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Chai Latte</h5>
                <p className=" text-center">$8</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img3.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Black Tea</h5>
                <p className="  text-center">$15</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img4.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Tandoori Chicken</h5>
                <p className="  text-center">$10</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img5.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Malwax Wrap Chicken</h5>
                <p className="  text-center">$12</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img6.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Mango Banana Smoothie</h5>
                <p className=" text-center">$10</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img7.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Sambusa Filled With Meat</h5>
                <p className="  text-center">$15</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img8.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Sambusa Filled With Vegetables</h5>
                <p className=" text-center">$10</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img9.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Tuna Sandwitch with Salad</h5>
                <p className=" text-center">$12</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img10.jpg' alt='' />
              <div className="card-body  text-center font-extrabold text-xl">
                <h5 className="card-title">Malawax Flavored Crepe - Strawberry</h5>
                <p className=" text-center">$8</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img11.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Salad Bowl</h5>
                <p className=" text-center">$15</p>
              </div>
            </div>
          </div>
          <div className='secFour_Container' name='books'>
            <div className=" bg-cover w-[80%] mx-auto max-w-[400px] h-auto bg-no-repeat">
              <img src='/carousal/img12.jpg' alt='' />
              <div div className="card-body  text-center font-extrabold text-xl" >
                <h5 className="card-title">Malwax Wrap -Egg</h5>
                <p className=" text-center">$10</p>
              </div>
            </div>
          </div>
        </Carousel>
        <div className=' text-center mt-2'>
          <a target='_blank' href="https://capitolcafe.menufy.com/">
            <button className=' rounded-2xl text-center px-10 py-2 text-xl font-bold hover:text-gray-700 bg-yellow-400 hover:bg-yellow-500 border-2 border-gray-700'>Click Here</button>
          </a>
        </div>
      </div>

    </>
  )
}



