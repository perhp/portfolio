import Image from "next/image";

interface Satellite {
  name: string;
  date: string;
  image: string;
  imageMap: string;
}

const satellites: Satellite[] = [
  {
    name: "NOAA 19",
    date: "28/11/2023 @ 19:30",
    image: "/images/satellites/2023-11-28/19-30_noaa-19/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-28/19-30_noaa-19/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    name: "NOAA 18",
    date: "27/11/2023 @ 21:30",
    image: "/images/satellites/2023-11-27/21-30_noaa-18/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-27/21-30_noaa-18/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    name: "NOAA 19",
    date: "27/11/2023 @ 19:45",
    image: "/images/satellites/2023-11-27/19-45_noaa-19/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-27/19-45_noaa-19/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    name: "NOAA 18",
    date: "26/11/2023 @ 21:45",
    image: "/images/satellites/2023-11-26/21-45_noaa-18/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-26/21-45_noaa-18/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    name: "NOAA 19",
    date: "26/11/2023 @ 20:08",
    image: "/images/satellites/2023-11-26/20-08_noaa-19/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-26/20-08_noaa-19/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    name: "NOAA 15",
    date: "26/11/2023 @ 19:15",
    image: "/images/satellites/2023-11-26/19-15_noaa-15/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-26/19-15_noaa-15/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    name: "NOAA 15",
    date: "25/11/2023 @ 18:05",
    image: "/images/satellites/2023-11-25/18-05_noaa-15/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-25/18-05_noaa-15/avhrr_apt_rgb_MCIR_map.png",
  },
];

export default function Page() {
  return (
    <div className="p-8 sm:p-16">
      <p className="text-sm tracking-wider text-center uppercase">My satellite images</p>
      <p className="text-xs tracking-wider text-center text-white/50">Images captured by meteorological satellites</p>

      <p className="p-6 mt-10 text-sm rounded bg-white/5">
        I capture images from weather satellites using an RTL-SDR v4 dongle connected to a V-dipole antenna and process them with SatDump.
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
                className="absolute inset-0 z-10 transition-opacity group-hover:opacity-0"
              />
              <Image src={satellite.imageMap} alt={satellite.name + " with map"} width={1600} height={800} className="relative -z-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
