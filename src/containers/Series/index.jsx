import { getOnDisplaySeries, getNewSeries, getPopularSeries, getTopSeries, getNewSerie } from "../../services/getData"
import { useEffect, useState } from "react"
import Slider from "../../components/Slider"
import { useNavigate } from "react-router-dom"
import { Background, Container, Info, Poster } from "../Series/styled"
import { getImages } from "../../utils/getImages"

function Series() {
    const [onDisplaySeries, setOnDisplaySeries] = useState()
    const [newSeries, setNewSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topSeries, setTopSeries] = useState()
    const [newSerie, setNewSerie] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getNewSerie(),
                getOnDisplaySeries(),
                getNewSeries(),
                getPopularSeries(),
                getTopSeries(),
            ])
                .then(([newSerie, onDisplaySeries, newSeries, popularSeries, topSeries,]) => {
                    setNewSerie(newSerie)
                    setOnDisplaySeries(onDisplaySeries)
                    setNewSeries(newSeries)
                    setPopularSeries(popularSeries)
                    setTopSeries(topSeries)
                })
        }
        getAllData()
    }, [])

    return (
        <>
            {newSerie && (
                <Background img={getImages(newSerie.backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{newSerie.name}</h1>
                            <p>{newSerie.overview}</p>
                        </Info>
                        <Poster>
                            <img src={getImages(newSerie.poster_path)} alt="sapa-da-serie" />
                        </Poster>
                    </Container>
                </Background>
            )}

            {onDisplaySeries && <Slider info={onDisplaySeries} title={'Em Breve'} />}
            {newSeries && <Slider info={newSeries} title={'Lançamentos'} />}
            {popularSeries && <Slider info={popularSeries} title={"Series Populares"} />}
            {topSeries && <Slider info={topSeries} title={"Top Series"} />}
        </>
    )
}

export default Series