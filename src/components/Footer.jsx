import React from 'react'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 lg:px-20 py-8 mx-auto flex items-center flex-col sm:flex-row md:justify-between">
                {/* <nav className="hidden lg:block md:ml-auto  flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:scale-110 text-white cursor-pointer">Home</a>
                    <a className="mr-5 hover:scale-110 text-white cursor-pointer">Menu</a>
                    <a className="mr-5 hover:scale-110 text-white cursor-pointer">About</a>
                    <a className="mr-5 hover:scale-110 text-white cursor-pointer">Contact</a>
                </nav> */}

                <nav className="flex ml-auto mb-4 md:mb-0 items-center text-base justify-center list-none">
                    <li><a href="/"><Link activeClass="active" to="home" spy={true} smooth={true} duration={700} className="mr-5 hover:scale-110 text-white cursor-pointer">Home</Link></a></li>
                    <li><a href="/"><Link activeClass="active" to="menu" spy={true} smooth={true} duration={700} className="mr-5 hover:scale-110 text-white cursor-pointer">Menu</Link></a></li>
                    <li><a href="/"><Link activeClass="active" to="about" spy={true} smooth={true} duration={700} className="mr-5 hover:scale-110 text-white cursor-pointer">About</Link></a></li>
                    <li><a href="/"><Link activeClass="active" to="contact" spy={true} smooth={true} duration={700} className="mr-5 hover:scale-110 text-white cursor-pointer">Contact</Link></a></li>
                </nav>

                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <span className="ml-3 text-xl">
                        <img src="/static/logo.png" alt="logo" />
                    </span>
                </a>
                <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 Capitol Cafe
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center">
                    <a className="text-white">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-white">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-white">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-white">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer

