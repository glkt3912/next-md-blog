import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
  console.log(props);
  return (
    <div 
      className="border border-violet-200 p-4 rounded-md shadow-md
      bg-white"
    >
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-500">{props.date}</p>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  )
}

export default PostPreview