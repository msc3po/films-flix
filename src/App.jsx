import './App.css'
import { useState } from 'react'
import { Movies } from './components/movies'

import SearchMovies from './mocks/search_Result.json'
import noResults from './mocks/no_Results.json'

const API_KEY = '4287ad07'
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s='avengers'`
const URL_fixed = 'http://www.omdbapi.com/?apikey=4287ad07&s=avengers'

function App () {
  const movies = SearchMovies.Search // where the movies are.

  const [search, setSearch] = useState(false)
  // const [movies, setMovies] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s='avengers'`)
      .then(response => response.json())
      .then(data => { setMovies(data.search) })
  }

  return (
    <>
      <header>
        <form id='Form' onSubmit={handleSubmit}>
          <input placeholder='Star por star, Warsburg, Avengers...' />
          <button>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
