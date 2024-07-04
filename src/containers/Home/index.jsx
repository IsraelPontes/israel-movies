import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { Background, Info, Poster, Container, ContainerButtons, Cards } from "./styled"
import Button from "../../components/Button"
import Slider from "../../components/Slider"
import { getImages } from "../../utils/getImages"
import Modal from "../../components/Modal"
import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from "../../services/getData"

function Home() {
    const [showModal, setshowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()
            ])
                .then(([movie, topMovies, topSeries, popularSreies, topPeople,]) => {
                    setMovie(movie)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setPopularSeries(popularSreies)
                    setTopPeople(topPeople)
                })
        }
        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal
                        movieId={movie.id}
                        setshowModal={setshowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button red={false} onClick={() => setshowModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)}
                                alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            <Cards>
                {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
                {topSeries && <Slider info={topSeries} title={'Top Series'} />}
                {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
                {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
            </Cards>
        </>
    )
}

export default Home
