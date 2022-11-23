enum Tier {
  S = "s",
  A = "a",
  B = "b",
}

interface Book {
  name: string;
  author: string;
  tier: Tier;
}

const books: Book[] = [
  {
    name: "Ego Is the Enemy",
    author: "Ryan Holiday",
    tier: Tier.S,
  },
  {
    name: "Never Split the Difference",
    author: "Chris Voss",
    tier: Tier.S,
  },
  {
    name: "Lead!",
    author: "Dale Carnegie & Associates",
    tier: Tier.A,
  },
  {
    name: "It's not how good you are, it's how good you want to be",
    author: "Paul Arden",
    tier: Tier.B,
  },
  {
    name: "The Basic Laws of Human Stupidity",
    author: "Carlo M. Cipolla",
    tier: Tier.S,
  },
  {
    name: "Seven and a Half Lessons About the Brain",
    author: "Lisa Feldman Barrett",
    tier: Tier.S,
  },
  {
    name: "The Rationalist's Guide to the Galaxy",
    author: "Tom Chivers",
    tier: Tier.S,
  },
  {
    name: "Money",
    author: "Yuval Noah Harari",
    tier: Tier.A,
  },
];

function TierSection({ title, books }: { title: string; books: Book[] }) {
  return (
    <div className="relative flex">
      <div className="flex flex-col w-full pl-4 sm:pl-8">
        <h2 className="pl-5 text-xl font-extrabold border-l-2 border-white">{title}</h2>
        <div className="grid grid-cols-3 gap-2 mt-5">
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

export default function Page() {
  return (
    <>
      <div className="p-8 sm:p-16">
        <p className="text-sm tracking-wider text-center uppercase">My personal book tier list</p>
        <p className="text-xs tracking-wider text-center text-white/50">Each tier is unordered</p>

        <div className="flex flex-col gap-10 mt-10">
          <TierSection title="S-Tier" books={books.filter((book) => book.tier === Tier.S)} />
          <TierSection title="A-Tier" books={books.filter((book) => book.tier === Tier.A)} />
          <TierSection title="B-Tier" books={books.filter((book) => book.tier === Tier.B)} />
        </div>
      </div>
    </>
  );
}
