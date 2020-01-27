
import './sass/main.scss'
import React from 'react'

import Background from './component/Background'
import Hero from './component/Hero'
import Navigation from './component/Navigation'
import Slider from './component/Slider'

export default class App extends React.Component {
    state = {
        top: 0,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        this.setState({ top: window.pageYOffset || document.documentElement.scrollTop })
    }

    handleScrollTo = top => window.scrollTo({ behavior: 'smooth', top })

    render() {
        return [
            <Background key="background" />,
            <Navigation key="navigation" top={ this.state.top } />,
            <div key="content" className="content">
                <div className="section section-1">
                    <Hero
                        buttonOnClick={ () => this.handleScrollTo(900) }
                        buttonTitle="Learn More"
                        subtitle="All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing."
                        title="Discover Grama — Asset Management" />
                </div>
                <div className="section section-2">
                    <Hero
                        buttonOnClick={ () => this.handleScrollTo(1700) }
                        buttonTitle="Learn More"
                        subtitle="Grama Network is a decentralized ecosystem that bridges the gap between entities desiring to track and trace movement across supply lines while safely storing relevant data. Stored data can be used for inventory management, logistics, analytics, marketing, sales, research, scheduling, accounting, and oversight. Grama Network is open-source with a comprehensive API making development easily accessible to third parties and Grama Foundation."
                        title="Supply Chain — At your fingertips!" />
                </div>
                <div className="section section-3">
                    <Slider />
                </div>
                <div className="section section-4">
                    <Hero
                        buttonOnClick={ () => alert('CLICKED') }
                        buttonTitle="Get Started"
                        subtitle="Grama Foundation is responsible for making sure that all interested parties are provided support to integrate current or new systems for usage with the Grama Network. Software architecture allows for easy integration using a modular design."
                        title="Get Grama" />
                </div>
            </div>,
        ]
    }
}
