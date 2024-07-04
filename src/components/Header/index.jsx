import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styled'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header() {
    const [changeBackground, setchangeBackground]= useState (false)
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const logoClick =  ()=>{
        navigate(`/`)
    }
    
    window.onscroll = () =>{
        if(window.pageYOffset >150){
            setchangeBackground(true)
        }
        if(changeBackground && window.pageYOffset <=150){
            setchangeBackground(false)
        }
    }
    
    return (
        <Container changeBackground={changeBackground}>
            <img src={Logo} alt="logo-dev-movies" onClick={logoClick}/>
            <Menu>
                <Li isActive={pathname ==='/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header