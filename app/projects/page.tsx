import { Metadata } from "next";
import { projects } from "./_data/projects";

export const metadata: Metadata = {
  title: "Projects - Per Hansen",
  description: "These are the projects I've been involved with over the years.",
};

export default function Page() {
  return (
    <div className="p-8 sm:p-16">
      <h1 className="text-sm tracking-wider text-center uppercase">
        These are the projects and companies I&apos;ve been involved with over the years.
      </h1>
      <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="relative flex flex-col col-span-1 p-8 border rounded group bg-white/5 border-white/5 hover:border-white/10"
          >
            <h2 className="text-lg font-extrabold">{project.name}</h2>
            <p className="text-xs font-medium">{project.position}</p>
            <div className="flex justify-between pt-5 mt-auto text-xs font-extrabold">
              <p>{project.employmentType}</p>
              <p>{project.yearsInPosition}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
