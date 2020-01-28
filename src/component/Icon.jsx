
import React from 'react'

export default function Icon(props) {
    return (
        <i { ...props } className={ `fas fa-${ props.name }` } />
    )
}
