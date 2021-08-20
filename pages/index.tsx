import type { NextPage } from "next";
import DefaultLayout from "../components/layout/default";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="flex gap-10 p-28">
        <div className="w-2/3 pr-28">
          <p className="mb-3 text-4xl font-light leading-4 tracking-wide">
            Hi, my name is
          </p>
          <h1 className="relative font-extrabold text-7xl w-min whitespace-nowrap">
            <span className="relative z-20">Per Hansen</span>
            <div className="absolute z-10 w-4/5 h-8 bg-blue-100 -left-2 -bottom-1"></div>
          </h1>
          <p className="mt-10 text-xl">
            I&apos;m a frontend developer and full-stack wannabe. I enjoy
            developing anything web, Arduino, Unity and really any technology i
            find interesting.
          </p>
        </div>
        <div className="flex flex-col w-1/3 gap-3">
          <h2 className="font-medium">Projects</h2>
          <a
            href="https://emanager.gg"
            target="_blank"
            rel="noreferrer"
            className="relative flex flex-col w-full p-5 text-green-900 transition-colors cursor-pointer bg-green-50 hover:bg-green-100 group"
          >
            <span className="mb-2 text-lg font-bold leading-4">eManager</span>
            <span className="leading-4 tracking-wide">CTO</span>
            <div className="absolute w-full h-full transition-all border-2 border-green-50 -right-1 -bottom-1 group-hover:border-green-100 group-hover:bottom-0 group-hover:right-0"></div>
          </a>
          <a
            href="https://storebuddy.dk"
            target="_blank"
            rel="noreferrer"
            className="relative flex flex-col w-full p-5 text-blue-900 transition-colors cursor-pointer bg-blue-50 hover:bg-blue-100 group"
          >
            <span className="mb-2 text-lg font-bold leading-4">Storebuddy</span>
            <span className="leading-4 tracking-wide">Consultant</span>
            <div className="absolute w-full h-full transition-all border-2 border-blue-50 -right-1 -bottom-1 group-hover:border-blue-100 group-hover:bottom-0 group-hover:right-0"></div>
          </a>
          <a
            href="https://additives-scanner.com"
            target="_blank"
            rel="noreferrer"
            className="relative flex flex-col w-full p-5 text-purple-900 transition-colors cursor-pointer bg-purple-50 hover:bg-purple-100 group"
          >
            <span className="mb-2 text-lg font-bold leading-4">
              Additives Scanner
            </span>
            <span className="leading-4 tracking-wide">Personal Project</span>
            <div className="absolute w-full h-full transition-all border-2 border-purple-50 -right-1 -bottom-1 group-hover:border-purple-100 group-hover:bottom-0 group-hover:right-0"></div>
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
