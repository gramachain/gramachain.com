
import React from 'react'

export default function Navigation(props) {
    return (
        <div className={ `navigation${ props.top > 50 ? ' fill' : '' }`}>
            <div className="container">
                <div className="logo">
                    <img alt="Grama" src="img/logo.png" />
                </div>
                <div className="menu">
                    <div className="menu-item active">
                        <a href="#" onClick={ () => alert('CLICKED') }>What is Grama?</a>
                    </div>
                    <div className="menu-item">
                        <a href="#" onClick={ () => alert('CLICKED') }>Get Grama</a>
                    </div>
                    <div className="menu-item">
                        <a href="#" onClick={ () => alert('CLICKED') }>Support</a>
                    </div>
                    <div className="menu-item">
                        <a href="#" onClick={ () => alert('CLICKED') }>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}