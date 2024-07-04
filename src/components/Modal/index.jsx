import { useEffect, useState } from 'react'
import { Container, Background } from './styles'
import { getMovieVideos } from '../../services/getData'

function Modal({movieId, setshowModal }) {
    const [movies, setMovies] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovies(await getMovieVideos(movieId))
        }
        getMovies()
    }, [])

    return (
        <Background onClick={() => setshowModal(false)}>
            {movies && (
                <Container>
                    {movies.some(movie => movie.name === 'Trailer Oficial Dublado') ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${movies.find(movie => movie.name === 'Trailer Oficial Dublado').key}`}
                            title="YouTube video player"
                            height="300px"
                            width="560"
                        >
                        </iframe>
                    ) : (
                        <iframe
                            src={`https://www.youtube.com/embed/${movies[0].key}`}
                            title="YouTube video player"
                            height="300px"
                            width="560"
                        >
                        </iframe>
                    )}
                </Container>
            )}
        </Background>
    )
}

export default Modal
