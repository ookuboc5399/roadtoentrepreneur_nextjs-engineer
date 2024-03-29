import Link from "next/link";
import Image from "next/image";

export default function Blog({ post }) {
  return (
    <Link href={``}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
        <Image alt="post" className="object-cover" src={post.image} />
        <div className="text-center my-4">
          <p>{post.title}</p>
        </div>
      </div>
    </Link>
  );
}