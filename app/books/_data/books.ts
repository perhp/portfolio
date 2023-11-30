export enum Tier {
  S = "s",
  A = "a",
  B = "b",
}

export interface Book {
  name: string;
  author: string;
  tier: Tier;
}

export const books: Book[] = [
  {
    name: "Stillness is the Key",
    author: "Ryan Holiday",
    tier: Tier.S,
  },
  {
    name: "How to Avoid a Climate Disaster",
    author: "Bill Gates",
    tier: Tier.S,
  },
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
    tier: Tier.A,
  },
  {
    name: "The Rationalist's Guide to the Galaxy",
    author: "Tom Chivers",
    tier: Tier.S,
  },
  {
    name: "Money",
    author: "Yuval Noah Harari",
    tier: Tier.S,
  },
];
