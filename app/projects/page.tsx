const projects = [
  {
    name: "Visma Dinero ApS",
    description: "Visma Dinero ApS is an accounting system for entrepreneurs and small businesses.",
    employmentType: "Freelance",
    position: "Frontend Developer",
    yearsInPosition: "Current",
    link: "https://dinero.dk",
  },
  {
    name: "Besprout.io",
    description:
      "Besprout.io provides inspiration and guidance for new and experienced vegans on where to get exciting vegan products.",
    employmentType: "Hobby project",
    position: "Full-Stack Developer & Owner",
    yearsInPosition: "Current",
    link: "https://besprout.io",
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

export default function Page() {
  return (
    <>
      <div className="p-8 sm:p-16">
        <p className="text-sm tracking-wider text-center uppercase">
          These are the projects and companies I&apos;ve been involved with over the years.
        </p>
        <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 xl:grid-cols-3 lg:mt-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="relative flex flex-col col-span-1 p-8 border rounded group bg-white/5 border-white/5 hover:border-white/10"
            >
              <p className="text-lg font-extrabold">{project.name}</p>
              <p className="text-xs font-medium">{project.position}</p>
              <div className="flex justify-between pt-5 mt-auto text-xs font-extrabold">
                <p>{project.employmentType}</p>
                <p>{project.yearsInPosition}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
