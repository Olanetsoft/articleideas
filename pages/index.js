import Head from 'next/head'
import Avatar from '../components/Avatar'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'

export default function Home({ results }) {
  const router = useRouter()
  const [isSeo, setIsSeo] = useState(false)
  const [isCliclbait, setIsClickbait] = useState(false)
  const [isEducational, setIsEducational] = useState(false)
  const [category, setCategory] = useState('Category')
  const [searchResult, setSearchResult] = useState([])
  const searchInputRef = useRef(null)

  const onSubmitHandler = (e) => {
    e.preventDefault()

    const data = {
      text: searchInputRef.current.value,
      seo: isSeo,
      clickbait: isCliclbait,
      educational: isEducational,
      category: category,
    }
    if (searchInputRef.current.value.trim() === '') return
    setSearchResult(results)
    return data
  }

  return (
    <div className="flex flex-col items-center h-screen ">
      <Head>
        <title>Article Generator</title>
        <meta
          name="GoogleSearch"
          content="An app that help writers generate article"
        />
        <link
          rel="icon"
          href="https://icons.iconarchive.com/icons/aha-soft/3d-social/16/Online-writing-icon.png"
        />
      </Head>
      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-800">
        {/*left section*/}
        <div className="flex space-x-4 items-center font-Ubuntu"></div>

        {/*right section*/}
        <div className="flex space-x-4 font-Ubuntu items-center">
          <a href="https://github.com/Olanetsoft/articleideas">
            <Avatar url="./github-brands.png" />
          </a>
        </div>
      </header>
      {/*body*/}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center pt-3 w-4/5"
      >
        <Image src="/banner.gif" height={207} width={700} priority />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
      border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-700" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu">
          <button type="button" className="btn flex gap-2 items-center">
            <input
              type="checkbox"
              checked={isSeo}
              onChange={() => setIsSeo((prev) => !prev)}
            />
            <span>SEO </span>
          </button>
          <button type="button" className="btn flex gap-2 items-center">
            <input
              type="checkbox"
              checked={isCliclbait}
              onChange={() => setIsClickbait((prev) => !prev)}
            />
            <span>Clickbait</span>
          </button>
          <button type="button" className="btn flex gap-2 items-center">
            <input
              type="checkbox"
              checked={isEducational}
              onChange={() => setIsEducational((prev) => !prev)}
            />
            <span> Educational</span>
          </button>
          <span>
            <button type="button" className="btn flex gap-2 items-center">
              <select
                style={{
                  background: 'inherit',
                  border: 'none',
                  outline: 'none',
                  padding: '0 1rem',
                }}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
              >
                <option value="" key="Category" defaultValue>
                  Category
                </option>
                <option
                  value=""
                  key="BlockChain"
                  style={{
                    height: '1rem',
                    padding: '0 1rem',
                  }}
                >
                  BlockChain
                </option>
                <option value="" key="Frontend">
                  Frontend
                </option>
                <option value="Backend" key="">
                  Backend
                </option>
              </select>
            </button>
          </span>
        </div>
      </form>
      <SearchResults results={searchResult} />
    </div>
  )
}

export async function getServerSideProps(context) {
  fetch('../api')
  return {
    props: {
      results: [
        {
          id: 1,
          title: 'Free Resources to Learn Solidity, Ethereum & Blockchain',
        },
        { id: 2, title: 'Getting Started on StarkNet with Infura' },
        { id: 3, title: 'How to Build and Deploy a USDC-based Smart Contract' },
        {
          id: 4,
          title: 'Build and Deploy Smart Contract.',
        },
        {
          id: 5,
          title: 'How to Upload, Crop, & Resize Images in the Browser ',
        },
        {
          id: 6,
          title: 'Hacktoberfest - Active Open Source Projects Accepting ',
        },
      ],
    },
  }
}
