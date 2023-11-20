import './App.css'
import { useRef } from 'react'
import { Movies } from './components/movies.jsx'
import { useMovies } from './hooks.js/useMovies.js'

function App () {
  const { movies } = useMovies()
  const inputRef = useRef()

  const handleSubmmit = (event) => {
    event.preventDefault()
    const value = inputRef.current.value
    console.log(value)
  }

  return (

    <div className='page'>

      <header>
        <h1> Films Searcher</h1>
        <form className='form' onSubmit={handleSubmmit}>
          <input ref={inputRef} type='text' placeholder='Star Wars, Star trek...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
