import styled, {css} from 'styled-components'

const buttonStyles = css`
border: 3px solid #FFFFFF;
background: transparent;
color: #FFFFFF;
border-radius: 30px;
padding: 10px 20px;
cursor: pointer;
font-size: 20px;
font-weight: 600;

&:hover{
    color: #FF0000;
    background: #FFFFFF;
}
`
export const ButtonWhite = styled.button`
${buttonStyles}
`
export const ButtonRed = styled.button`
${buttonStyles}

background: #FF0000;
border: 4px solid transparent;
box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);
&:hover{
    color:#FFFFFF;
    background: #FF0000;
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 /30%);
}
`
