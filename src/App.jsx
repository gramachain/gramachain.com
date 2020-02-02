
import './sass/main.scss'
import React from 'react'

import Blog from './page/Blog'
import Landing from './page/Landing'
import Navigation from './component/Navigation'
import { Route, Switch } from 'react-router-dom'

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

    render() {
        return [
            <Navigation key="navigation" top={ this.state.top } />,
            <Switch key="routes">
                <Route component={ () => (<Blog />) } path="/blog/:topic" />
                <Route component={ () => (<Landing />) } exact path="/" />
            </Switch>,
        ]
    }
}
