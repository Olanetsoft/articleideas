import styles from './../styles/Footer.module.css'
function Footer() {
  return (
    <footer
      className={` bottom-0 grid w-full divide-y-[1px] divide-gray-400 bg-gray-100 text-gray-500 font-OpenSans mt-1 ${styles.footer}`}
    >
      <div className="px-8 py-3"></div>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex  justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu">
          <span className="flex flex-col gap-5 ">
            <span className="flex font-bold my-0 mx-auto items-center ">
              Proudly made with 💗 by
            </span>
            <span className="flex gap-2 font-medium font-sans">
              <span className="flex">
                <img src="github-brands.png" className="h-5  px-1 "></img>{' '}
                <a href="https://github.com/Olanetsoft">
                  {' '}
                  Olubisi Idris Ayinde
                </a>
              </span>{' '}
              <span>||</span>
              <span className="flex font-medium">
                <img src="github-brands.png" className="h-5  px-1 "></img>{' '}
                <a href="https://github.com/Olanetsoft"> Kelvin Moses</a>
              </span>
            </span>
          </span>
        </div>

        <div className="flex justify-center text-sm space-x-5 whitespace-nowrap md:justify-self-start"></div>
      </div>
    </footer>
  )
}

export default Footer
