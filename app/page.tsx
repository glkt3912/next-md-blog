import fs from  "fs"
import Link from "next/link"

const getPostMetaData = () => {
  const folder = "posts/"
  const files = fs.readdirSync(folder)
  const markDownPosts = files.filter((file) => file.endsWith(".md"))
  const slugs = markDownPosts.map((file) => file.replace(".md", ""))
  return slugs
}

const HomePage = () => {
  const postMetadata = getPostMetaData()
  const postPreviews = postMetadata.map((slug) => {
    return (
      <div>
        <Link href={`/posts/${slug}`}>
          <h2>{slug}</h2>
        </Link>
      </div>
    )
  })

  return <div>{postPreviews}</div>
}

export default HomePage