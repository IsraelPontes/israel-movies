import { getSeriesById, getSeriesVideos, getSeriesCredits, getSeriesSimilar } from '../../services/getData'
import { Container, Background, Cover, Info, ContainerMovie } from './styled'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getImages } from '../../utils/getImages'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'

function Detail() {
    const [serie, setSeries] = useState(null);
    const [seriesVideos, setSeriesVideos] = useState([]);
    const [seriesCredits, setSeriesCredits] = useState([]);
    const [seriesSimilar, setSeriesSimilar] = useState([]);

    const [firstDate, setFirstDate] = useState('');
    const [secondDate, setSecondDate] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getSeriesById(id),
                getSeriesVideos(id),
                getSeriesCredits(id),
                getSeriesSimilar(id),
            ])
                .then(([serie, video, credits, similar]) => {
                    setSeries(serie)
                    setSeriesVideos(video)
                    setSeriesCredits(credits)
                    setSeriesSimilar(similar)
                    setFirstDate(
                        serie.first_air_date
                            ? `Primeiro Episódio Lançado Em: ${serie.first_air_date.split('-').reverse().join('/')}`
                            : ''
                    );
                    setSecondDate(
                        serie.last_air_date
                            ? `Último Episódio Lançado Em: ${serie.last_air_date.split('-').reverse().join('/')}`
                            : ''
                    );                    
                })
        }
        getAllData()
    }, [id])

    return (
        <>
            {serie && (
                <>
                    <Background image={getImages(serie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(serie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{serie.name}</h2>
                            <h3>{firstDate}</h3>
                            <h3>{secondDate}</h3>
                            <SpanGenres genres={serie.genres} />
                            <p>{serie.overview}</p>
                            <div>
                                <Credits credits={seriesCredits} />
                            </div>
                        </Info>
                    </Container>
                    {seriesSimilar && <Slider info={seriesSimilar} title={'Similares'} />}
                    <ContainerMovie>
                        {seriesVideos &&
                            seriesVideos.map(video => (
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
