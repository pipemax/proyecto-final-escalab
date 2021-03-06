const base_url = "https://imdb-api.com";
const api_key = "k_qapc066o";
const lang = "es";
const topmovies = `/${lang}/API/Top250Movies/${api_key}`;
const topseries = `/${lang}/API/Top250TVs/${api_key}`;
const mostpopularmovies   = `/${lang}/API/MostPopularMovies/${api_key}`;
const mostpopularseries   = `/${lang}/API/MostPopularTVs/${api_key}`;
const title  = `/${lang}/API/Title/${api_key}`;
const search = `/${lang}/API/Search/${api_key}`;
const searchmovies = `/${lang}/API/SearchMovie/${api_key}`;
const searchseries = `/${lang}/API/SearchSeries/${api_key}`;
const options = `FullActor,FullCast,Images,Trailer`;

export const getTopMoviesUrl = () => `${base_url}${topmovies}`;
export const getTopSeriesUrl = () => `${base_url}${topseries}`;
export const getPopularMoviesUrl = () => `${base_url}${mostpopularmovies}`;
export const getPopularSeriesUrl = () => `${base_url}${mostpopularseries}`;
export const searchTitlesUrl = query => `${base_url}${search}/${query}`;
export const searchMoviesUrl = query => `${base_url}${searchmovies}/${query}`;
export const searchSeriesUrl = query => `${base_url}${searchseries}/${query}`;
export const getTitleById = query => `${base_url}${title}/${query}/${options}`;