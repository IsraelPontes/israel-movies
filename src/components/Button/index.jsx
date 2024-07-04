import {ButtonRed, ButtonWhite} from './styled'

function Button({children, red, ...rest}) {
    return (
    <>{red ? 
        (<ButtonRed {...rest}>{children}</ButtonRed>):
        (<ButtonWhite {...rest}>{children}</ButtonWhite>)}    
    </>
)
}

export default Button
