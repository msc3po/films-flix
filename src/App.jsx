import './App.css'
import { useRef } from 'react'
import { Movies } from './components/movies.jsx'
import { useMovies } from './hooks.js/useMovies.js'

function App () {
  const { movies } = useMovies()

  const handleSubmmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    // const query = fields.get('query')
    console.log(fields)
  }

  return (

    <div className='page'>

      <header>
        <h1> Films Searcher</h1>
        <form className='form' onSubmit={handleSubmmit}>
          <input name='query' type='text' placeholder='Star Wars, Star trek...' />
          <input name='puery' type='text' placeholder='Star Wars, Star trek...' />
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
