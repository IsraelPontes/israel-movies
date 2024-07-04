import { Container } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardImage from '../CardImage'

function SliderImage({ info, title }) {
    console.log("info", info)
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className='swiperimage'
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardImage item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default SliderImage


