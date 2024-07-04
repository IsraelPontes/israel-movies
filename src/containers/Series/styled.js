import styled, {keyframes} from "styled-components";

const scale = keyframes`
    from{
        transform: scale(0)
    }
    to{
        transform: scale(1)
    }

`

export const Background = styled.div`
background-image:url(${ (props) => props.img});
height:100vh;
background-position: center;
background-size: cover;
display:flex;
align-items: center;
justify-content:center;

&::before{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:105%;
    background-color: rgba(0, 0, 0, 0.5);
}
&::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 105%;
    background-image: linear-gradient(to top, #0F0F0F, rgba(0,0,0, 0));
}
`
export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;

`
export const Info = styled.div`
z-index:1999;
padding:20px;
width:65%;
h1{
    font-size: 4rem;
    font-weight: 700;
    color: #FFFFFF;
}
p{
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF; 
    margin-top: 30px;
    margin-bottom:20px;
}
`
export const Poster = styled.div`
z-index:100;
img{
    width: 250px;
    border-radius:30px;
    margin-top:30px;
    animation: ${scale} 0.6s linear;
}
`
export const ContainerButtons = styled.div`
display:flex;
gap:20px;
`