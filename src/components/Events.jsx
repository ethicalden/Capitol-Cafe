import React from 'react';
import './styles.css';
const Events = () => {
    return (
        <div>
            <div className='md:p-20 p-10'>
                <h1 className=' text-6xl font-bold mb-10 uppercase'>Catering</h1>
                <div className='grid gap-12 lg:grid-cols-2'>

                    <div className='relative lg:h-96 group events-container overflow-hidden'>
                        <img className='w-full max-h-full' src="/static/events1.jpeg" alt="" />
                        <div className='events absolute duration-[700ms] ease-in-out translate-x-[110%] group-hover:translate-x-0 transition-transform text-white top-0 left-0 flex justify-center items-center text-5xl font-serif font-semibold w-full h-full'>
                            <h1>Corporate Events</h1>
                        </div>
                    </div>
                    <div className='relative lg:h-96 group events-container overflow-hidden'>
                        <img className='w-full max-h-full' src="/static/events2.png" alt="" />
                        <div className='events absolute duration-[700ms] ease-in-out translate-x-[110%] group-hover:translate-x-0 transition-transform text-white top-0 left-0 flex justify-center items-center text-5xl font-serif font-semibold w-full h-full'>
                            <h1>Social Events</h1>
                        </div>
                    </div>
                    <div className='relative lg:h-96 group events-container overflow-hidden'>
                        <img className='w-full max-h-full' src="/static/events3.png" alt="" />
                        <div className='events absolute duration-[700ms] ease-in-out translate-x-[110%] group-hover:translate-x-0 transition-transform text-white top-0 left-0 flex justify-center items-center text-5xl font-serif font-semibold w-full h-full'>
                            <h1>Political Events</h1>
                        </div>
                    </div>
                    <div className='relative lg:h-96 group events-container overflow-hidden'>
                        <img className='w-full max-h-full' src="/static/events4.png" alt="" />
                        <div className='events absolute duration-[700ms] ease-in-out translate-x-[110%] group-hover:translate-x-0 transition-transform text-white top-0 left-0 flex justify-center items-center text-5xl font-serif font-semibold w-full h-full'>
                            <h1>Birthday Party Events</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Events