import './App.css'
import { useEffect, useState, useRef } from 'react'
import { Movies } from './components/movies'
import { useMovies } from './hooks.js/useMovies'

import SearchMovies from './mocks/search_Result.json'
import noResults from './mocks/no_Results.json'

const API_KEY = '4287ad07'
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s='avengers'`
const URL_fixed = 'http://www.omdbapi.com/?apikey=4287ad07&s=avengers'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('no se puede buscar peli vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se  puede buscar una peli con un número')
      return
    }
    if (search.length < 3) {
      setError('La busqueda debe tener almenos 3 caracteres]')
    }
    setError(null)
  }, [search])
  return { search, setSearch, error }
}

function App () {
  const { movies: mappedMovies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    // const fields = new window.FormData(event.target)

    //   fetch('http://www.omdbapi.com/?apikey=4287ad07&s=avengers')
    //     .then(res => res.json())
    //     .then(data = res)
  }
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <header>
        <form id='Form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' placeholder='Star por star, Warsburg, Avengers...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </>
  )
}

export default App
