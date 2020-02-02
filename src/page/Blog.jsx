
import articles from '../articles.json'
import React from 'react'
import { withRouter } from 'react-router-dom'

import Background from '../component/Background'
import Footer from '../component/Footer'

class Blog extends React.Component {
    render() {
        const slug = s => s.replace(/\ /g, '-').toLowerCase()

        const { topic } = this.props.match.params
        let article = null
        for (let [k, v] of Object.entries(articles)) {
            if (slug(v.title) === topic) {
                article = v
                break
            }
        }
        let component = (
            <div>
                <h1 className="title">404 Not Found</h1>
                <div className="body">The blog post you are looking for cannot be found.</div>
            </div>
        )
        if (!!article) {
            component = (
                <div>
                    <h1 className="title">{ article.title }</h1>
                    <div className="body" dangerouslySetInnerHTML={ { __html: article.html } } />
                </div>
            )
        }

        return [
            <Background blog key="background" />,
            <div key="content" className="content">
                <div className="blog blog-1">
                    <div className="menu">
                        <div className="title-of-document">{ article.title }</div>
                        <a href="#" className="subtitle">Heading</a>
                        <a href="#" className="subtitle">Heading</a>
                        <a href="#" className="subtitle">Heading</a>
                        <a href="#" className="subtitle">Heading</a>
                    </div>
                    { component }
                </div>
                <Footer />
            </div>,
        ]
    }
}

export default withRouter(Blog)
