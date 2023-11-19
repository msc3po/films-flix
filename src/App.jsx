import './App.css'

function App () {
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
        Here will appear the search results
      </main>

    </div>
  )
}

export default App
