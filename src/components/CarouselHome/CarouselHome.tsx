import { Carousel } from "react-bootstrap"

const CarouselHome = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d block w-100"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                    src="/assets/images/img1.jpg" alt="sl1" />
                <Carousel.Caption>
                    <h3>Consumo optimo de recursos</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d block w-100"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                    src="/assets/images/img2.jpg" alt="sl2" />
                <Carousel.Caption>
                    <h3>Implementacion de tareas para el dia a dia</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d block w-100"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                    src="/assets/images/img3.jpg" alt="sl3" />
                <Carousel.Caption>
                    <h3>Creacion de tareas por grupos de trabajo</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome