import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/with-no-results.json'
import { Movies } from './components/movies.jsx'

function App () {
  const movies = responseMovies.Search

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
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
