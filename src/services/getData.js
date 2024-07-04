import api from "./api"
// Filmes--------------------------------------------------
export async function getMovies() {
    const { data: { results } } = await api.get('/movie/popular')
    return results[0]
}

export async function getNewMovie() {
    const { data: { results } } = await api.get('/movie/now_playing')
    return results[0]
}

export async function getNewMovies() {
    const { data: { results } } = await api.get('/movie/now_playing')
    return results
}

export async function getPopularMovies() {
    const { data: { results } } = await api.get('/movie/popular')
    return results
}

export async function getTopMovies() {
    const { data: { results } } = await api.get('/movie/top_rated')
    return results
}

export async function getShortlyMovies() {
    const { data: { results } } = await api.get('/movie/upcoming')
    return results
}

export async function getMovieVideos(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/videos`)
    return results
}

export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)
    return cast
}

export async function getMovieSimilar(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/similar`)
    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)
    return data
}

// Series de TV------------------------------------------------
export async function getSeries() {
    const { data: { results } } = await api.get('/tv/popular')
    return results[0]
}

export async function getNewSerie() {
    const { data: { results } } = await api.get('/tv/on_the_air')
    return results[0]
}

export async function getOnDisplaySeries() {
    const { data: { results } } = await api.get('/tv/airing_today')
    return results
}

export async function getNewSeries() {
    const { data: { results } } = await api.get('/tv/on_the_air')
    return results
}

export async function getPopularSeries() {
    const { data: { results } } = await api.get('/tv/popular')
    return results
}

export async function getTopSeries() {
    const { data: { results } } = await api.get('/tv/top_rated')
    return results
}

export async function getSeriesVideos(serieId) {
    const { data: { results } } = await api.get(`/tv/${serieId}/videos`)
    return results
}

export async function getSeriesCredits(serieId) {
    const { data: { results } } = await api.get(`/tv/${serieId}/credits`)
    return results
}

export async function getSeriesSimilar(serieId) {
    const { data: { results } } = await api.get(`/tv/${serieId}/similar`)
    return results
}

export async function getSeriesById(serieId) {
    const { data} = await api.get(`/tv/${serieId}`)
    return data
}

// Atores--------------------------------------------------

export async function getTopPeople() {
    const { data: { results } } = await api.get('/person/popular')
    return results
}

export async function getPersonImages(personId) {
    const { data: {profiles}} = await api.get(`/person/${personId}/images`)
    return profiles
}

export async function getPersonMovieCredits(personId) {
    const { data: {cast}} = await api.get(`/person/${personId}/movie_credits`)
    return cast
}

export async function getPersonSerieCredits(personId) {
    const { data: {cast}} = await api.get(`/person/${personId}/tv_credits
`)
    return cast
}

export async function getPersonById(personId) {
    const { data} = await api.get(`person/${personId}`)
    return data
}
