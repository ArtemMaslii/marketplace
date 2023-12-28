import Carousel from "react-bootstrap/Carousel";
import {useState} from "react";

import duck from "../../resources/img/tealmarket-logo.png";
import "./customCarousel.scss";

const CustomCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={100000000}>
                <img src={duck} alt="Duck" className="center"/>
                <Carousel.Caption>
                    <h3>Duck number {index + 1}</h3>
                    <p>Small duck</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={duck} alt="Duck" className="center"/>
                <Carousel.Caption>
                    <h3>Duck number {index + 1}</h3>
                    <p>Medium duck</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={duck} alt="Duck" className="center"/>
                <Carousel.Caption>
                    <h3>Duck number {index + 1}</h3>
                    <p>Large duck</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CustomCarousel;