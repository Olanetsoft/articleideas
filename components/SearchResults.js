import Footer from './Footer'
import PaginationButtons from './PaginationButtons'

function SearchResults({ results }) {
  return (
    <div className=" bottom-0 mx-auto w-full  mt-10 px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-OpenSans mb-0.5">
      <ul>
        {results?.map((result) => (
          <li
            key={result.id}
            className=" max-w-xl  mb-2 font-sans my-0 mx-auto "
          >
            <div className="group">
              <a href={'#'}>
                <h2
                  className=" sm mx-auto 
           text-xl text-blue-700 group-hover:underline font-OpenSans"
                >
                  {result.title}
                </h2>
              </a>
            </div>
          </li>
        ))}
      </ul>

      {results > 9 && <PaginationButtons />}
    </div>
  )
}

export default SearchResults
