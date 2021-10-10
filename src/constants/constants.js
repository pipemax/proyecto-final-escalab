const base_url = 'https://imdb-api.com'
const api_key = 'k_qapc066o'
const lang = 'es'
const topmovies = `/${lang}/API/Top250Movies/${api_key}`
const topseries = `/${lang}/API/Top250TVs/${api_key}`
const mostpopularmovies   = `/${lang}/API/MostPopularMovies/${api_key}`
const mostpopularseries   = `/${lang}/API/MostPopularMovies/${api_key}`
const search = `/${lang}/API/Search/${api_key}`
const searchmovies = `/${lang}/API/SearchMovie/${api_key}`
const searchseries = `/${lang}/API/SearchSeries/${api_key}`

export const getTopMovies = () => `${base_url}${topmovies}`
export const getTopSeries = () => `${base_url}${topseries}`
export const getPopularMovies = () => `${base_url}${mostpopularmovies}`
export const getPopularSeries = () => `${base_url}${mostpopularseries}`
export const searchTitles = query => `${base_url}${search}/${query}`
export const searchMovies = query => `${base_url}${search}/${query}`
export const searchSeries = query => `${base_url}${search}/${query}`