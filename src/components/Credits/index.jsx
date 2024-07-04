import { useNavigate } from 'react-router-dom'
import { getImages } from '../../utils/getImages'
import { Title, Container } from './styled'

function Credits({credits}) {
    const navigate = useNavigate();

    const cardClick = (id) => {
        navigate(`/detalhesperson/${id}`)
    }

    return (
        <>
            <Title>Créditos</Title>
            {credits &&
                <Container >
                    {credits.slice(0, 5).map(artist => (
                        <div key={artist.id} onDoubleClick={() => cardClick(artist.id)}>
                            <img src={getImages(artist.profile_path)} />
                            <p>{artist.original_name}</p>
                        </div>
                    ))}
                </Container>
            }
        </>
    )
}
export default Credits
