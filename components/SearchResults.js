import PaginationButtons from './PaginationButtons'

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full  mt-10 px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-OpenSans">
      {results?.map((result) => (
        <div key={result.id} className="max-w-xl mb-2 font-sans  ">
          <div className="group">
            <a href={'#'}>
              <h2
                className="truncate  mx-auto 
           text-xl text-blue-700 group-hover:underline font-OpenSans"
              >
                {result.title}
              </h2>
            </a>
          </div>
        </div>
      ))}
      {results > 9 && <PaginationButtons />}
    </div>
  )
}

export default SearchResults
