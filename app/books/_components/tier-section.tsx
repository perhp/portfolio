import { Book } from "../_data/books";

export default function TierSection({ title, books }: { title: string; books: Book[] }) {
  return (
    <div className="relative flex">
      <div className="flex flex-col w-full">
        <h2 className="pl-5 text-xl font-extrabold border-l-2 border-white">{title}</h2>
        <div className="grid grid-cols-1 gap-2 mt-5 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book, i) => (
            <div key={i} className="flex flex-col p-6 rounded bg-white/5">
              <h3 className="font-medium leading-4">{book.name}</h3>
              <p className="mt-1 text-xs text-slate-300">by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
