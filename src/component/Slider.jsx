
import React, { useState } from 'react'

import Hero from './Hero'
import IconButton from './IconButton'
import Slick from 'react-slick'

function NextArrow({ currentSlide, slideCount, ...props }) {
    return (
        <IconButton
            { ...props }
            className="next-arrow"
            icon="arrow-right" />
    )
}

function PrevArrow({ currentSlide, slideCount, ...props }) {
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
        subtitle="The software suite of applications provided by the GramaChain Foundation are professionally designed user experiences that provide first-class ease of use, increased productivity, and a common-sense layout. Information is autofilled when necessary."
        title="User Experience" />,
    <Hero
        buttonTitle="NONE"
        subtitle="Common processes compatible with existing technologies such as RFID and QR code scanning are automated. Processes are similar and repetitive making state-based automation possible with a scan from a mobile device or scanner. GramaChain Foundation’s software suite is compatible with common scanners, and configured to work with those not already covered. State-based means that plants are typically in germination, seedling, vegetation, and flowering stages or states. For example, if a plant was previously in a vegetation room and is scanned in a flowering room then its movement and change in the stage will be automatically updated then reported without the need for further manual interaction."
        title="Automation" />,
    <Hero
        buttonTitle="NONE"
        subtitle="Near instant reporting to a wide range of participants on the GramaChain Network. Alerts are sent in real-time and can be subscribed to by participants connected to the GramaChain Network. If an asset is tracked on the GramaChain Network it can then be traced allowing for immediate reporting and verification by anyone connected to the associated network."
        title="Contamination Reporting" />,
     <Hero
        buttonTitle="NONE"
        subtitle="GramaChain Foundation is responsible for making sure that all interested parties are provided support to integrate current or new systems for usage with the GramaChain Network. Software architecture allows for easy integration using a modular design."
        title="Affordable Solutions" />,
    <Hero
        buttonTitle="NONE"
        subtitle="Infinite scaling solutions that will save money are as simple as GramaChain Network expanding its user base. As peers are added, data becomes redundant and secure. GramaChain Network is designed to grow or shrink as demand changes while providing consensus in a matter of seconds."
        title="Infinite Scaling" />,
     <Hero
        buttonTitle="NONE"
        subtitle="Participating in the GramaChain Network delegate program grants anyone staking GRAMA a chance to earn rewards whenever transaction fees are collected. Staking GRAMA is as simple as voting your favorite delegate."
        title="Reward Incentives" />,
]

export default function Slider(props) {
    return (
        <Slick className="slider" { ...settings }>
            { slides.map((slide, i) => (
                <div className="slide" key={ i }>
                    { slide }
                    <div className="image">
                        <img alt="Grama" src="img/slide1.svg" />
                    </div>
                </div>
            )) }
        </Slick>
    )
}
