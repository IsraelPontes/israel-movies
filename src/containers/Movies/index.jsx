import { useEffect, useState } from "react"
import { getPopularMovies, getTopMovies, getNewMovies, getShortlyMovies, getNewMovie } from "../../services/getData"
import Slider from "../../components/Slider"
import { useNavigate } from "react-router-dom"
import { Background, Poster, Info, Container } from "../Movies/styled"
import { getImages } from "../../utils/getImages"

function Movies() {
    const [popularMovies, setPopularMovies] = useState()
    const [topMovies, setTopMovies] = useState()
    const [newMovies, setNewMovies] = useState()
    const [shortlyMovies, setShortlyMovie] = useState()
    const [newMovie, setNewMovie] = useState()
    
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getNewMovie(),
                getPopularMovies(),
                getTopMovies(),
                getNewMovies(),
                getShortlyMovies(),
            ])
                .then(([newMovie, popularMovies, topMovies, newMovies, shortlyMovies,]) => {
                    setNewMovie(newMovie)
                    setPopularMovies(popularMovies)
                    setTopMovies(topMovies)
                    setNewMovies(newMovies)
                    setShortlyMovie(shortlyMovies)
                })
        }
        getAllData()
    }, [])

    return (
        <>
            {newMovie && (
                <Background img={getImages(newMovie.backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{newMovie.title}</h1>
                            <p>{newMovie.overview}</p>
                        </Info>
                        <Poster>
                            <img src={getImages(newMovie.poster_path)}
                                alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}

            {shortlyMovies && <Slider info={shortlyMovies} title={'Em Breve'} />}
            {newMovies && <Slider info={newMovies} title={'Lançamentos'} />}
            {popularMovies && <Slider info={popularMovies} title={'Filmes Populares'} />}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        </>
    )
}

export default Movies

