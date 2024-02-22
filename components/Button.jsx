import React from 'react'

function Button() {
  return (
    <div>
      <button
                    type="submit"
                    className="py-3 px-3 bg-blue-400 hover:bg-[#4884DA] transition duration-200 ease-in-out mt-8 rounded-lg w-full lg:w-52 focus:ring-blue-500 focus:ring-offset-blue-200 text-white text-center text-base font-semibold shadow-md  disabled:cursor-not-allowed disabled:bg-slate-500">
                    Save and Continue
                  </button>
    </div>
  )
}

export default Button
