
import React, { useState } from 'react'

import Hero from './Hero'
import IconButton from './IconButton'
import Slick from 'react-slick'

function NextArrow(props) {
    return (
        <IconButton
            { ...props }
            className="next-arrow"
            icon="arrow-right" />
    )
}

function PrevArrow(props) {
    return (
        <IconButton
            { ...props }
            className="prev-arrow"
            icon="arrow-left" />
    )
}

const settings = {
    dots: false,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const slides = [
    <Hero
        buttonTitle="NONE"
        subtitle="The software suite of applications provided by the Grama Foundation are professionally designed user experiences that provide first-class ease of use, increased productivity, and a common-sense layout.  Information is autofilled when necessary. All software will meet or exceed GS1/ISO standards."
        title="User Experience" />,
    <Hero
        buttonTitle="NONE"
        subtitle="The software suite of applications provided by the Grama Foundation are professionally designed user experiences that provide first-class ease of use, increased productivity, and a common-sense layout.  Information is autofilled when necessary. All software will meet or exceed GS1/ISO standards."
        title="User Experience2" />,
    <Hero
        buttonTitle="NONE"
        subtitle="The software suite of applications provided by the Grama Foundation are professionally designed user experiences that provide first-class ease of use, increased productivity, and a common-sense layout.  Information is autofilled when necessary. All software will meet or exceed GS1/ISO standards."
        title="User Experience3" />,
]

export default function Slider(props) {
    return (
        <Slick className="slider" { ...settings }>
            { slides.map((slide, i) => (
                <div className="slide" key={ i }>
                    { slide }
                    <div className="image">
                        <img alt="Grama" src="img/placeholder.png" />
                    </div>
                </div>
            )) }
        </Slick>
    )
}
