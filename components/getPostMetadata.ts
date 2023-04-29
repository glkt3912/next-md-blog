import fs from  "fs"
import matter from "gray-matter"
import { PostMetadata } from "../components/PostMetadata"

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/"
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8")
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    }
  })

  posts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0
  })

  return posts
}

export default getPostMetadata
