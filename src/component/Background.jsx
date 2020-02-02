
import React from 'react'

export default function Background(props) {
    const blog = !!props.blog

    return (
        <div className="background">
            { !blog && <div className="group group-3" /> }
            { !blog && <div className="group group-6" /> }
            { !blog && <div className="group group-7" /> }
            { blog && <div className="group group-4" /> }
            { blog && <div className="group group-8" /> }
        </div>
    )
}
