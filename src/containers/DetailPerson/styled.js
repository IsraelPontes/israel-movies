import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    from{
        transform: scale(0)
    }
    to{
        transform: scale(1)
    }

`
export const Background = styled.div`
    background-image: url(${(props) => props.image});
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.5)
    }

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150%;
        background-image: linear-gradient(to top, #0F0F0F, rgba(0,0,0, 0));
}
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width: 1500px;
    margin-top: -100px;
`
export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 99;

    img{
        width: 340px;
        border-radius:30px;
        margin-top: 30px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        animation: ${scale} 0.6s linear;
    }
    `
    export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 99;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    h2{
        margin-top: 20px;
        font-size:50px;
        font-weight:700;
        color: #FFFFFF;
    }

    h3{
        margin-top: 20px;
        margin-bottom: 10px;
        font-size:20px;
        font-weight:700;
        color: #FFFFFF;
    }

    p{
        font-weight:700;
        color: #FFFFFF;
        margin-top: 20px;
        margin-bottom: 20px;
}
`
