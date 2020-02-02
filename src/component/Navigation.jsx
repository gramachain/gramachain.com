
import React from 'react'

import { Link } from 'react-router-dom'

export default function Navigation(props) {
    return (
        <div className={ `navigation${ props.top > 50 ? ' fill' : '' }`}>
            <div className="container">
                <div className="logo">
                    <img alt="Grama" src="img/logo-grama.svg" />
                </div>
                <div className="menu">
                    <div className="menu-item active">
                        <Link to="/">What is Grama?</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/">Get Grama</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/">Support</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
