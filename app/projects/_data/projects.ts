interface Project {
  name: string;
  description: string;
  employmentType: string;
  position: string;
  yearsInPosition: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "permi.dk",
    description: "permi.dk is an amateur weather satellite image project.",
    employmentType: "Hobby project",
    position: "Full-Stack Developer",
    yearsInPosition: "Current",
    link: "https://www.permi.dk",
  },
  {
    name: "Gavemild",
    description: "Gavemild is a platform for creating and sharing wishlists.",
    employmentType: "Hobby project",
    position: "Full-Stack Developer",
    yearsInPosition: "Current",
    link: "https://www.gavemild.dk",
  },
  {
    name: "Visma Dinero ApS",
    description: "Visma Dinero ApS is an accounting system for entrepreneurs and small businesses.",
    employmentType: "Freelance",
    position: "Frontend Developer",
    yearsInPosition: "Current",
    link: "https://dinero.dk",
  },
  {
    name: "Besprout.dk",
    description: "Besprout.dk provides inspiration and guidance for new and experienced vegans on where to get vegan products.",
    employmentType: "Hobby project",
    position: "Full-Stack Developer & Owner",
    yearsInPosition: "Current",
    link: "https://www.besprout.dk",
  },
  {
    name: "Storebuddy ApS",
    description:
      "Storebuddy ApS makes accounting easier for webshop owners by providing automated bookeeping and reporting about imbalances on orders.",
    employmentType: "Freelance",
    position: "Frontend Developer",
    yearsInPosition: "1 year",
    link: "https://storebuddy.dk",
  },
  {
    name: "eManager ApS",
    description:
      "eManager ApS was an esports platform for the less experienced esports audience. eManager also provided tournaments with a fantasy manager game.",
    employmentType: "Full-time",
    position: "Full-Stack Developer & Partner",
    yearsInPosition: "2 years",
    link: "https://emanager.gg",
  },
  {
    name: "Visma Dinero ApS",
    description: "Visma Dinero ApS is an accounting system for entrepreneurs and small businesses.",
    employmentType: "Full-time",
    position: "Frontend Developer",
    yearsInPosition: "4 years",
    link: "https://dinero.dk",
  },
  {
    name: "Y-mAbs ApS",
    description:
      "Y-mAbs is a commercial-stage clinical biopharmaceutical company focused on the development and commercialization of novel, antibody-based therapeutic products for the treatment of cancer.",
    employmentType: "Freelance",
    position: "Full-Stack Developer",
    yearsInPosition: "3 years",
    link: "https://ymabs.com",
  },
];
