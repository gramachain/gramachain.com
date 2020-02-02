
import articles from '../articles.json'
import React from 'react'

import { Link } from 'react-router-dom'

export default function Articles(props) {
    let arts = []
    for (let [k, v] of Object.entries(articles)) {
        arts.push(v)
    }
    arts = arts.sort((a, b) => {
        if (a.unix > b.unix) return -1
        if (a.unix < b.unix) return 1
        return 0
    })

    const slug = s => s.replace(/\ /g, '-').toLowerCase()

    return (
        <div className="articles">
            { arts.slice(0, 3).map(a => (
                <div key={ a.name } className="article">
                    <Link className="title" to={ `/blog/${ slug(a.title) }` }>{ a.title }</Link>
                    <div className="summary">{ a.summary }</div>
                </div>
            )) }
        </div>
    )
}
