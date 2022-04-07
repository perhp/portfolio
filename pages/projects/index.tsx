import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "../../components/layout/default";

const projects = [
  {
    name: "Visma Dinero ApS",
    description: "Visma Dinero ApS is an accounting system for entrepreneurs and small businesses.",
    employmentType: "Full-time",
    position: "Frontend Developer",
    yearsInPosition: "4 years",
    link: "https://dinero.dk",
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
    name: "Storebuddy ApS",
    description:
      "Storebuddy ApS makes accounting easier for webshop owners by providing automated bookeeping and reporting about imbalances on orders.",
    employmentType: "Freelance",
    position: "Frontend Developer",
    yearsInPosition: "1 year",
    link: "https://storebuddy.dk",
  },
  {
    name: "Besprout.io",
    description:
      "Besprout.io provides inspiration and guidance for new and experienced vegans on where to get exciting vegan products.",
    employmentType: "Hobby project",
    position: "Full-Stack Developer & Owner",
    yearsInPosition: "1 year",
    link: "https://besprout.io",
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

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Per Hansen - Projects</title>
      </Head>
      <DefaultLayout>
        <div className="p-8 py-20 lg:px-28 lg:py-28">
          <p className="text-base font-semibold tracking-wider text-center text-gray-600 uppercase">
            These are the projects and companies I&apos;ve been involved with over the years.
          </p>
          <div className="grid grid-cols-1 gap-3 mt-6 md:grid-cols-2 xl:grid-cols-3 lg:mt-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col col-span-1 px-8 py-8 transition-all transform bg-blue-50 hover:shadow-zinc-200 hover:shadow-lg hover:-translate-y-1"
              >
                <p className="font-extrabold text-blue-900">{project.name}</p>
                <p className="text-xs font-medium">{project.position}</p>
                <p className="mt-3 font-medium leading-5 text-blue-900">{project.description}</p>
                <div className="flex justify-between pt-5 mt-auto text-xs font-extrabold">
                  <p>{project.employmentType}</p>
                  <p>{project.yearsInPosition}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Projects;
