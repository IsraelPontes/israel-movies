import { useNavigate } from 'react-router-dom'
import { getImages } from '../../utils/getImages'
import { Container } from './styled'
import api from '../../services/api'

function Card({ item}) {
    const navigate = useNavigate()

    const cardClick = () => {
        if (item.video === false) {
            navigate(`/detalhe/${item.id}`)
        }else if(item.known_for_department === "Acting") {
            navigate(`/detalhesperson/${item.id}`)
        }else{
            navigate(`/detalheserie/${item.id}`)
        };
    }

    return (
        <Container onDoubleClick={cardClick}>
            <img src={getImages(item.poster_path || item.profile_path || '')} alt="" />
            <h3>{item.title || item.name || ''}</h3>
        </Container>
    )
}

export default Card
