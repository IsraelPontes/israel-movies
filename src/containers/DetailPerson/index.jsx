import { getPersonById, getPersonImages, getPersonMovieCredits, getPersonSerieCredits } from '../../services/getData'
import { Container, Background, Cover, Info } from './styled'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getImages } from '../../utils/getImages'
import SliderImage from '../../components/SliderImage'
import Slider from '../../components/Slider'

function DetailPerson() {
    const [person, setPerson] = useState(null);
    const [personImages, setPersonImages] = useState([]);
    const [personMovieCredits, setPersonMovieCredits] = useState([]);
    const [personSerieCredits, setPersonSerieCredits] = useState([])
    const [birthdaytDate, setBirthdaytDate] = useState('');

    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getPersonById(id),
                getPersonImages(id),
                getPersonMovieCredits(id),
                getPersonSerieCredits(id)

            ])
                .then(([person, images, moviecredits, seriecredits]) => {
                    setPerson(person)
                    setPersonImages(images)
                    setPersonMovieCredits(moviecredits)
                    setPersonSerieCredits(seriecredits)
                    setBirthdaytDate(
                        person.birthday
                            ? `Faz aniversário em: ${person.birthday.split('-').reverse().join('/')
                            + ', em ' + person.place_of_birth
                            }`
                            : ''
                    );
                })
        }
        getAllData()
    }, [id])

    return (
        <>
            {person && (
                <>
                    <Background image={getImages(person.profile_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(person.profile_path)} />
                        </Cover>
                        <Info>
                            <h2>{person.name}</h2>
                            <h3>{birthdaytDate}</h3>
                            <p>{person.biography}</p>
                        </Info>
                    </Container>
                    {personImages && <SliderImage info={personImages} title={'Outras Imagens'} />}
                    {personMovieCredits && <Slider info={personMovieCredits} title={'Filmes Com Participação do Ator'} />}
                    {personSerieCredits && <Slider info={personSerieCredits} title={'Series Com Participação do Ator'} />}

                </>
            )}
        </>
    )
}

export default DetailPerson
