import Link from "next/link";
import Image from "next/image";

export default function Book({ book }) {
  return (
    <Link href={`/book/${book.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
        <Image alt="book" className="object-cover" src={book.image} />
        <div className="text-center my-4">
          <p>{book.title}</p>
        </div>
      </div>
    </Link>
  );
}