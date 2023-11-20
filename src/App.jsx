import './App.css'
import { Movies } from './components/movies.jsx'
import { useMovies } from './hooks.js/useMovies.js'

function App () {
  const { movies: mappedMovies } = useMovies()
  return (

    <div className='page'>

      <header>
        <h1> Films Searcher</h1>
        <form className='form' name='searchForm' id='searchForm'>
          <input type='text' placeholder='Star Wars, Star trek...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}

export default App
