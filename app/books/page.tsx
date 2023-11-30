import TierSection from "./_components/tier-section";
import { Tier, books } from "./_data/books";

export const metadata = {
  title: "Books - Per Hansen",
  description: "These are the books I've read over the years.",
};

export default function Page() {
  return (
    <div className="p-8 sm:p-16">
      <h1 className="text-sm tracking-wider text-center uppercase">My personal book tier list</h1>
      <p className="text-xs tracking-wider text-center text-white/50">Each tier is unordered</p>

      <div className="flex flex-col gap-10 mt-10">
        <TierSection title="Excellent" books={books.filter((book) => book.tier === Tier.S)} />
        <TierSection title="Good" books={books.filter((book) => book.tier === Tier.A)} />
        <TierSection title="Not for me" books={books.filter((book) => book.tier === Tier.B)} />
      </div>
    </div>
  );
}
