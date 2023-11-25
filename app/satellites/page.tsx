import Image from "next/image";

interface Satellite {
  name: string;
  date: string;
  image: string;
  imageWithLandmarks: string;
}

const satellites: Satellite[] = [
  {
    name: "NOAA 15",
    date: "25/11/2023 @ 18:05",
    image: "/images/satellites/noaa-15_2023-11-25-18-05.png",
    imageWithLandmarks: "/images/satellites/noaa-15_2023-11-25-18-05-landmarks.png",
  },
];

export default function Page() {
  return (
    <div className="p-8 sm:p-16">
      <p className="text-sm tracking-wider text-center uppercase">My satellite images</p>
      <p className="text-xs tracking-wider text-center text-white/50">Images captured by meteorological satellites</p>

      <p className="p-6 mt-10 text-sm rounded bg-white/5">
        I utilize straightforward methods to receive images from weather satellites. I do this by connecting an RTL-SDR dongle with a
        V-dipole antenna, which helps in capturing the images. After receiving them, I process these images using an APT decoder.
      </p>

      <div className="flex flex-col gap-10 mt-10">
        {satellites.map((satellite) => (
          <div key={satellite.date} className="flex flex-col">
            <p className="text-sm text-white/50">{satellite.date}</p>
            <p className="mb-3 text-3xl">{satellite.name}</p>
            <div className="relative group">
              <Image
                src={satellite.image}
                alt={satellite.name}
                width={1600}
                height={800}
                className="absolute inset-0 z-10 transition-opacity pointer-events-none group-hover:opacity-0"
              />
              <Image
                src={satellite.imageWithLandmarks}
                alt={satellite.name + " with landmarks"}
                width={1600}
                height={800}
                className="relative pointer-events-none -z-10"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
