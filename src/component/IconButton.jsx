
import React from 'react'

import Icon from './Icon'

export default function IconButton({ icon, ...props }) {
    return (
        <button { ...props } className="round">
            <Icon name={ icon } />
        </button>
    )
}
