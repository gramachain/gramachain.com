
import React from 'react'

import IconButton from './IconButton'

export default function Hero(props) {
    let buttonComponent = (
        <button className="primary" onClick={ props.buttonOnClick }>
            { props.buttonTitle }
        </button>
    )
    if (!!props.icon) {
        buttonComponent = (
            <IconButton icon={ props.icon } onClick={ props.buttonOnClick } />
        )
    }

    return (
        <div className="hero">
            <h1 className="title">
                { props.title }
            </h1>
            <h3 className="subtitle">
                { props.subtitle }
            </h3>
            { props.buttonOnClick && buttonComponent }
        </div>
    )
}
