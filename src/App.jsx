import './App.css'
import { useMovies } from './hooks.js/useMovies'
import { useEffect, useState, useRef } from 'react'
import { Movies } from './components/movies'

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
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <header>
        <h3>Film searcher</h3>
        <form id='Form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' placeholder='Star por star, Warsburg, Avengers...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading
          ? <p> LOADING ... </p>
          : <Movies movies={movies} />}
      </main>
    </>
  )
}

export default App
