import fs from 'fs/promises'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export async function fetchPaths(path) {
  const paths = await fs.readdir(path)
  return paths
}

export async function fetchPost(path, slug) {
  const post = await fs.readFile(`${path}${slug}/index.md`)
  return parsePost(post, slug)
}

export async function fetchPosts(path) {
  const paths = await fetchPaths(path)
  const postFileRequests = paths.map((p) => fs.readFile(`${path}${p}/index.md`))
  const postsFiles = await Promise.all(postFileRequests)
  const posts = postsFiles.map((buffer, index) =>
    parsePost(buffer, paths[index])
  )
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date)
  )
  return sortedPosts
}

function parsePost(buffer, slug) {
  const parsed = matter(buffer)
  const time = readingTime(parsed.content)
  return {
    data: parsed.data,
    content: parsed.content,
    minsToRead: time.minutes,
    slug,
  }
}
