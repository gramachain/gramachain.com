
import React from 'react'

import Icon from './Icon'

export default function IconButton({ className, icon, ...props }) {
    const classes = ['round']
    if (!!className) classes.push(className)

    return (
        <button { ...props } className={ classes.join(' ') }>
            <Icon name={ icon } />
        </button>
    )
}
