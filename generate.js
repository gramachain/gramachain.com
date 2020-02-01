
const fs = require('fs')
const path = require('path')
const showdown = require('showdown')

const articlesPath = path.join(__dirname, 'articles')
const blogPath = path.join(__dirname, 'docs', 'blog')
const converter = new showdown.Converter()

const getFile = name => {
    let parts = name.split('.')
    parts = parts[0].split('-')

    return {
        date: `${ parts[0] }-${ parts[1] }-${ parts[2] }`,
        html: '',
        name,
        title: `${ parts.slice(3).join(' ') }`,
    }
}

const getHTML = path => {
    const text = fs.readFileSync(path, 'utf8')
    return converter.makeHtml(text)
}

fs.readdir(articlesPath, (err, files) => {
    if (err) {
        console.error(err)
        return
    }

    files.forEach(file => {
        const f = getFile(file)
        f.html = getHTML(path.join(articlesPath, f.name))
        fs.writeFileSync(path.join(blogPath, f.name.replace('.md', '.html')), f.html)
    })
})
