import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/with-no-results.json'

function App () {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (

    <div className='page'>

      <header>
        <h1> Films Searcher</h1>
        <form className='form'>
          <input type='text' placeholder='Star Wars, Star trek...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? renderMovies()
            : renderNoResults()
}

      </main>

    </div>

  )
}

export default App
