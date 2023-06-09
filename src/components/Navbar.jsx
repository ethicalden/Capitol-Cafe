import React, { useState } from 'react'
import { AiOutlineInstagram, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll';
import { FaHome, FaUserTie } from "react-icons/fa"
import { MdContactMail } from "react-icons/md"
import { AiFillFileText } from "react-icons/ai"

const Navbar = () => {
  return (
    <div className=' ' name='home' id='home'>
      <div className="mobDesign block lg:hidden" name='home' id='home'><MobileDesign /></div>
      <div className="lapDesign hidden lg:block" name='home' id='home'> <LaptopDesign /></div>
    </div>
  )
}

export default Navbar

export const MobileDesign = () => {
  const [navbar, setNavbar] = useState(false)

  const handleItemClick = () => {
    setNavbar(false)
  };
  const genericHamburgerLine = `h-[2px] w-5 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <>
      <div className='' name='home' id='home'>
        <div>
          <img src="/static/banner.png" alt="" />
        </div>
        <div className=' absolute top-0 left-0'>
          <a className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0">
            <span className="ml-3 text-xl">
              <img className=' w-36' src="/static/logo.png" alt="logo" />
            </span>
          </a>
        </div>
        <div className='text-white top-20 pl-2 w-44 left-0 md:top-64 md:w-full md:pl-8 absolute '>
          <h1 className=' md:text-6xl text-yellow-500 md:font-bold md:mb-8 '>Capitol Cafe &
            Catering</h1>
          <p className=' md:text-2xl pt-1 md:py-10'>Healthy East African-American</p>

          <button target='_blank' href="https://capitolcafe.menufy.com/" className=' px-6 mt-6 py-2 border border-white rounded-lg hover:scale-110 transition-transform duration-500 transform hover:rotate-12 hover:text-black hover:bg-white'>Order Now</button>

          <div className='flex flex-row mr-auto pl-48 -mt-9 text-3xl md:text-white '>
            <div className=' flex flex-row bg-white text-black rounded-xl px-2 py-[3px]'>
              <a href="" className=" mr-3"><BsFacebook /></a>
              <a href="" className=" mr-3"><AiFillTwitterCircle /></a>
              <a href="" className=" mr-3"><AiOutlineInstagram /></a>
              <a href="" className=" "><AiOutlineWhatsApp /></a>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute w-full top-0 left-0 z-10 justify-space-evenly overflow-hidden transition duration-[0.5s] ${navbar ? " translate-x-[0]" : " -translate-x-[110%]"}`}>
        <div className={`list-none flex flex-col text-sec text-[24px] font-[650px] h-full ease-in-out w-full bg-white`}>
          <div className='ml-3 active:text-pri'>
            <li className=' active:text-yellow-500 text-yellow-400' ><a href="/"><Link onClick={handleItemClick} activeClass="active" to="home" spy={true} smooth={true} duration={700} className="nav-links m-2 flex  items-center py-3"><FaHome className='mr-5 ' />Home</Link></a></li>
            <hr className='mr-2 border-5 border-[#4d5358]' />
          </div>
          <div className='ml-3 active:text-pri'>
            <li className=' active:text-yellow-500 text-yellow-400' ><a href="/"><Link onClick={handleItemClick} activeClass="active" to="menu" spy={true} smooth={true} duration={700} className="nav-links m-2 flex  items-center py-3"><FaUserTie className='mr-5' />Menu</Link></a></li>
            <hr className='mr-2 border-5 border-[#4d5358]' />
          </div>
          <div className='ml-3 active:text-pri'>
            <li className=' active:text-yellow-500 text-yellow-400'  ><a href="/"><Link onClick={handleItemClick} activeClass="active" to="about" spy={true} smooth={true} duration={700} className="nav-links m-2 flex  items-center py-3"><AiFillFileText className='mr-5' />About</Link></a></li>
            <hr className='mr-2 border-5 border-[#4d5358]' />
          </div>
          <div className='ml-3 active:text-pri'>
            <li className=' active:text-yellow-500 text-yellow-400' ><a href="/"><Link onClick={handleItemClick} activeClass="active" to="contact" spy={true} smooth={true} duration={700} className="nav-links m-2 flex  items-center py-3"><MdContactMail className='mr-5' />Contact</Link></a></li>
            <hr className='mr-2 border-5 border-[#4d5358]' />
          </div>
        </div>
      </div >
      <div className='absolute z-[99999] top-2 right-2'>
        <button onClick={() => setNavbar(!navbar)} className={` text-sec m-3 p-[10px] rounded-md bg-slate-300 shadow-sm shadow-slate-400`}>
          {<>
            <div
              className={` ${genericHamburgerLine} ${navbar
                ? "rotate-45 translate-y-[7px] opacity-50 group-hover:opacity-100 "
                : "opacity-50 group-hover:opacity-100"
                } `}
            />
            <div className={`${genericHamburgerLine} ${navbar ? "opacity-0" : "opacity-50 group-hover:opacity-100"} `} />
            <div
              className={`${genericHamburgerLine} ${navbar
                ? "-rotate-45 -translate-y-[5px] opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                } `}
            />
          </>}
        </button>
      </div></>

  )
}

export const LaptopDesign = () => {
  return (
    <>
      <div className='heroContainer relative'>
        <img src="/static/banner.png" alt="" />
        <div className='overflow-hidden absolute top-10 left-10 w-full'>
          <header className=" body-font text-white">
            <div className=" flex  ">
              <div>
                <a className="  text-gray-900 mb-1 ">
                  <span className="">
                    <img className='' src="/static/logo.png" alt="logo" />
                  </span>
                </a>
              </div>
              <div className=' text-center flex place-items-end pb-1 pl-96'>
                <nav className=" flex list-none">
                  <li><a href="/"><Link activeClass="active" to="home" spy={true} smooth={true} duration={800} className="md:mr-20 hover:text-yellow-400 text-yellow-300 mb-1 text-xl hover:scale-110 cursor-pointer">Home</Link></a></li>
                  <li><a href="/"><Link activeClass="active" to="menu" spy={true} smooth={true} duration={800} className="md:mr-20 hover:text-yellow-400 text-yellow-300 mb-1 text-xl hover:scale-110 cursor-pointer">Menu</Link></a></li>
                  <li><a href="/"><Link activeClass="active" to="about" spy={true} smooth={true} duration={800} className="md:mr-20 hover:text-yellow-400 text-yellow-300 mb-1 text-xl hover:scale-110 cursor-pointer">About</Link></a></li>
                  <li><a href="/"><Link activeClass="active" to="contact" spy={true} smooth={true} duration={800} className="md:mr-20 hover:text-yellow-400 text-yellow-300 mb-1 text-xl hover:scale-110 cursor-pointer">Contact</Link></a></li>
                </nav>
              </div>
            </div>
          </header>
        </div>
        <div className='text-white top-24  left-0 md:top-64 w-full pl-8 absolute'>
          <h1 className=' text-[75px] text-yellow-500 font-bold  '>Capitol Cafe &
            <br />Catering</h1>
          <p className=' md:text-2xl md:py-10'>Healthy East African-American infusion food</p>
          <a target='_blank' href="https://capitolcafe.menufy.com/"><button className=' px-6 py-2 border border-white rounded-lg hover:scale-110 transition-transform duration-500 transform hover:rotate-12 hover:text-black hover:bg-white'>Order Now</button></a>

          <div className=' md:flex md:mt-10 text-3xl bg-white text-black w-60 rounded-lg pl-2 py-2'>
            <a href="" className=" mr-8 hover:scale-100 hover:text-yellow-400 transition-transform hover:translate-x-1 hover:-translate-y-1 hover:duration-300"><BsFacebook /></a>
            <a href="" className=" mr-8 hover:scale-100 hover:text-yellow-400 transition-transform hover:translate-x-1 hover:-translate-y-1 hover:duration-300"><AiFillTwitterCircle /></a>
            <a href="" className=" mr-8 hover:scale-100 hover:text-yellow-400 transition-transform hover:translate-x-1 hover:-translate-y-1 hover:duration-300"><AiOutlineInstagram /></a>
            <a href="" className=" mr-8 hover:scale-100 hover:text-yellow-400 transition-transform hover:translate-x-1 hover:-translate-y-1 hover:duration-300"><AiOutlineWhatsApp /></a>
          </div>
        </div>

      </div>
    </>
  )
}