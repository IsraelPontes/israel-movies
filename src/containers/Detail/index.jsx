import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from '../../services/getData'
import { Container, Background, Cover, Info, ContainerMovie } from './styled'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getImages } from '../../utils/getImages'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'

function Detail() {
    const [movie, setMovie] = useState(null);
    const [movieVideos, setMovieVideos] = useState([]);
    const [movieCredits, setMovieCredits] = useState([]);
    const [movieSimilar, setMovieSimilar] = useState([]);
    const [formattedDate, setFormattedDate] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
            ])
                .then(([movie, videos, credits, similar]) => {
                    
                    setMovie(movie)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                    setFormattedDate(
                        movie.release_date
                            ? `Lançado Em: ${movie.release_date.split('-').reverse().join('/')}`
                            : 'Data de lançamento não disponível'
                    );
                })
        }
        getAllData()
    }, [id])

    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <h3>{formattedDate}</h3>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>
                    {movieSimilar && <Slider info={movieSimilar} title={'Similares'} />}
                    <ContainerMovie>
                        {movieVideos &&
                            movieVideos.map(video => (
                                <div key={video.id} >
                                    <h4>{video.name}</h4>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.key}`}
                                        title="YouTube video player"
                                        height="300px"
                                        width="100%"
                                    >
                                    </iframe>
                                </div>
                            ))
                        }
                    </ContainerMovie>
                </>
            )}
        </>
    )
}

export default Detail
