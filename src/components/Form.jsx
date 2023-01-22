import React from 'react'

export const Form = () => {
  return (
    <div>
      {' '}
      <form>
        <div classNameName="bg-gray-200">
          <div classNameName="container h-screen flex justify-center items-center">
            <div classNameName="relative">
              <div className="absolute top-4 left-3">
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
              </div>
              <input
                type="text"
                className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
              <div className="absolute top-2 right-2">
                <button
                  type="submit"
                  className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
                >
                  Search
                </button>
              </div>
              <div class="relative inline-flex">
                <svg
                  class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fill-rule="nonzero"
                  />
                </svg>
                <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                  <option>Choose a color</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Yellow</option>
                  <option>Black</option>
                  <option>Orange</option>
                  <option>Purple</option>
                  <option>Gray</option>
                  <option>White</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
