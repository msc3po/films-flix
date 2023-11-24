import { searchMovies } from '../services/movies'
import { useState, useRef } from 'react'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState([false])
  const [error, setError] = useState([null])
  const previoiusSerch = useRef(search)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      previoiusSerch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading }
}
