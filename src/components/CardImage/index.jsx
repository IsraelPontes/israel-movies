import { useNavigate } from 'react-router-dom'
import { getImages } from '../../utils/getImages'
import { Container } from './styled'
import api from '../../services/api'

function CardImage({ item}) {
    const navigate = useNavigate()
    return (
        <Container >
            <img src={getImages(item.file_path || item.poster_path || item.profile_path || '')} alt="" />
            <h3>{item.title || item.name || ''}</h3>
        </Container>
    )
}

export default CardImage
