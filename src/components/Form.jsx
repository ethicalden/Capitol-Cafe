import React from 'react'

const Form = () => {
  return (
    <div className=' my-7' name='contact' id='contact'>
      <div className=" text-center md:text-5xl text-3xl font-bold ">
        <h1>Contact Us</h1>
      </div>
      <div class="flex justify-center">
        <form class="w-full max-w-md md:max-w-lg lg:max-w-2xl">
          <div class="mb-4 ">
            <input class="focus-visible:outline-none bg-transparent border-b border-gray-500 py-2 px-3 w-full text-gray-500" type="text" placeholder="Name" />
          </div>
          <div class="mb-4">
            <input class="focus-visible:outline-none bg-transparent border-b border-gray-500 py-2 px-3 w-full text-gray-500" type="text" placeholder="Email" />
          </div>
          <div class="mb-4">
            <textarea class="focus-visible:outline-none bg-transparent border-b border-gray-500 py-2 px-3 w-full h-24 text-gray-500" placeholder="Message"></textarea>
          </div>
          <button class=" ml-auto mr-auto flex bg-yell bg-yellow-500 hover:bg-yellow-300 text-xl md:text-2xl font-semibold md:font-bold py-3 rounded-xl md:px-14 px-9" type="button">
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}

export default Form