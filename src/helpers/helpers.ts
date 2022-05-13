import { marked } from 'marked'
import prism from 'prismjs'

export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const formatDate = (date) => {
  return date.toLocaleString('default', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
}

export const formatminsToRead = (mins) => {
  return Math.max(Math.round(mins), 1)
}

export const markdownToHTML = (markdown) => {
  const renderer = new marked.Renderer()

  renderer.code = function (code, lang = 'text', escaped) {
    const className = `language-${lang}`
    const grammar = prism.languages[lang]
    const highlighted = grammar ? prism.highlight(code, grammar, lang) : code
    return `<pre class="${className}" tabindex="0"><code class="${className}">${highlighted}</code></pre>`
  }
  renderer.codespan = function (code) {
    return `<code class="language-text">${code}</code>`
  }

  return marked(markdown, { renderer })
}
