import Head from 'next/head'
import Header from '../components/Header'
import HeaderOptions from '../components/HeaderOptions'
import HeaderOption from '../components/HeaderOption'
import Response from '../Response'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'
import PaginationButtons from '../components/PaginationButtons'

function Search({ results }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*header*/}

      <Header />

      {/*body*/}

      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  tartIndex = context.query.start || '0'

  const data = useDummyData
    ? Response
    : await fetch(``).then((response) => response.json())

  return {
    props: {
      results: data,
    },
  }
}
