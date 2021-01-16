import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./style.css";

class SuperiorItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const settings = {
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              mouseDragEnabled: true, 
        };
        return (

            <div className="m-10 w-full">
                <AliceCarousel {...settings} className="w-full">
                    <img src="../img/superior1.jpg" className="superior-img1 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior2.jpg" className="superior-img2 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior3.jpg" className="superior-img3 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior4.jpg" className="superior-img4 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior5.jpg" className="superior-img5 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior6.jpg" className="superior-img6 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior7.jpg" className="superior-img7 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior8.jpg" className="superior-img8 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior9.jpg" className="superior-img9 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior10.jpg" className="superior-img10 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior11.jpg" className="superior-img11 bg-no-repeat bg-contain m-5" />
                    <img src="../img/superior12.jpg" className="superior-img12 bg-no-repeat bg-contain m-5" />
                </AliceCarousel>

            </div>
        );
    }
} 

const handleDragStart = (e) => e.preventDefault();

export default SuperiorItem;
