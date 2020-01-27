
import React from 'react'

export default function Hero(props) {
    return (
        <div className="hero">
            <h1 className="title">
                { props.title.replace('\n', <br />) }
            </h1>
            <h3 className="subtitle">
                { props.subtitle.replace('\n', <br />) }
            </h3>
            { props.buttonOnClick &&
                <button className="primary" onClick={ props.buttonOnClick }>
                    { props.buttonTitle }
                </button>
            }
        </div>
    )
}
