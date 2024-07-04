import styled from 'styled-components'

export const Container = styled.div`
min-height: 100px;
z-index:2000;
position: fixed;
top:0;
display: flex;
padding: 10px 50px;
justify-content:space-between;
align-items: center;
background-color: ${props => props.changeBackground ? '#000' : 'transparente'};
transition: background-color 1s ease-in-out;

img{
    width:25%;
    cursor:pointer;
}
`
export const Menu = styled.ul`
display:flex;
list-style: none;
gap: 50px;
`
export const Li = styled.li`
font-weight: 600;
cursor: pointer;
font-size: 25px;
position: relative;

a{
    text-decoration: none;
    color: #FFFFFF;
}

&:after{
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
}

&:hover::after{
    width: 100%;
}
`

