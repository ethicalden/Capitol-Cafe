import React from 'react'


const CardCarousal = () => {
  return (
    <div className=''>
      <div className="mobDesign block lg:hidden"><MobileDesign /></div>
      <div className="lapDesign hidden lg:block"> <LaptopDesign /></div>
    </div>
  )
}

export default CardCarousal

const LaptopDesign = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel carousel-dark slide relative" data-bs-ride="carousel" data-interval="1000">
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
        <a href="https://capitolcafe.menufy.com/">
          <button className=' rounded-2xl text-center px-10 py-2 text-xl font-bold hover:text-gray-700 bg-yellow-400 hover:bg-yellow-500 border-2 border-gray-700'>Click Here</button>
        </a>
      </div>
    </>
  )
}


export const MobileDesign = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel carousel-dark slide relative" data-bs-ride="carousel" data-interval="1000">
        <ol className="carousel-indicators absolute -bottom-14">
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="2"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="3"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="4"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="5"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="6"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="7"></li>
          <li data-bs-target="#carouselExampleControls" data-bs-slide-to="8"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img1.jpeg" className="card-img-top" alt="..." />
                <div className="card-body  text-center font-extrabold text-xl">
                  <h5 className="card-title">Oodkac</h5>
                  <p className="  text-center">$12</p>
                </div>
              </div>

            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex justify-content-around">
              <div className="card border-none " style={{ width: "18rem" }}>
                <img src="/carousal/img2.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Chai Latte</h5>
                  <p className=" text-center">$8</p>
                </div>
              </div>

            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
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
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img4.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Tandoori Chicken</h5>
                  <p className="  text-center">$10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img5.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Malwax Wrap Chicken</h5>
                  <p className="  text-center">$12</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
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
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img8.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Sambusa Filled With Vegetables</h5>
                  <p className=" text-center">$10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card border-none" style={{ width: "18rem" }}>
                <img src="/carousal/img9.jpg" className="card-img-top" alt="..." />
                <div div className="card-body  text-center font-extrabold text-xl" >
                  <h5 className="card-title">Tuna Sandwitch with Salad</h5>
                  <p className=" text-center">$12</p>
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
      </div>
      <div className=' text-center mt-20'>
        <a href="https://capitolcafe.menufy.com/">
          <button className=' rounded-2xl text-center px-10 py-2 text-xl font-bold hover:text-gray-700 bg-yellow-400 hover:bg-yellow-500 border-2 border-gray-700'>Click Here</button>
        </a>
      </div>
    </>
  )
}






