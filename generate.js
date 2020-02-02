
const fs = require('fs')
const moment = require('moment')
const path = require('path')
const showdown = require('showdown')

const articlesPath = path.join(__dirname, 'articles')
const blogPath = path.join(__dirname, 'docs', 'blog')
const converter = new showdown.Converter({
    tables: true,
})

const getFile = name => {
    let parts = name.split('.')
    parts = parts[0].split('-')

    const date = `${ parts[0] }-${ parts[1] }-${ parts[2] }`
    return {
        date,
        name,
        title: `${ parts.slice(3).join(' ') }`,
        unix: moment(date, 'YYYY-MM-DD').unix(),
    }
}

const getHTML = path => {
    const markdown = fs.readFileSync(path, 'utf8')

    let cleanMarkdown = ''
    let end = false
    let start = false
    let summary = ''
    for (let i = 0; i < markdown.length; i++) {
        const c = markdown.charAt(i)
        if (c === '+' && !start) {
            start = true
        } else if (c === '+' && start) {
            end = true
        } else if (start && !end) {
            summary += c
        } else if (end) {
            cleanMarkdown += c
        }
    }

    const html = converter.makeHtml(cleanMarkdown)
    return { html, summary }
}

fs.readdir(articlesPath, (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    const articles = {}
    files.forEach(file => {
        const f = getFile(file)

        const { html, summary } = getHTML(path.join(articlesPath, f.name))
        f.html = html
        f.summary = summary

        articles[f.name] = f

        //const htmlPath = `${ f.title.replace(' ', '-') }.html`
        //fs.writeFileSync(path.join(blogPath, htmlPath), html)
    })

    fs.writeFileSync(path.join(__dirname, 'src', 'articles.json'), JSON.stringify(articles))
})
