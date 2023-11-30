import { N2YOSatellitePosition } from "../_models/n2yo-satellite-position";

export interface SatelliteImage {
  satelliteId: N2YOSatellitePosition["info"]["satid"];
  name: string;
  date: string;
  image: string;
  imageMap: string;
}

enum SatelliteId {
  "NOAA15" = 25338,
  "NOAA18" = 28654,
  "NOAA19" = 33591,
}

export const satelliteImages: SatelliteImage[] = [
  {
    satelliteId: SatelliteId.NOAA18,
    name: "NOAA 18",
    date: "30/11/2023 @ 21:15",
    image: "/images/satellites/2023-11-30/21-15_noaa-18/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-30/21-15_noaa-18/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA19,
    name: "NOAA 19",
    date: "30/11/2023 @ 21:05",
    image: "/images/satellites/2023-11-30/21-05_noaa-19/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-30/21-05_noaa-19/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA15,
    name: "NOAA 15",
    date: "30/11/2023 @ 19:15",
    image: "/images/satellites/2023-11-30/19-15_noaa-15/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-30/19-15_noaa-15/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA19,
    name: "NOAA 19",
    date: "30/11/2023 @ 19:05",
    image: "/images/satellites/2023-11-30/19-05_noaa-19/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-30/19-05_noaa-19/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA18,
    name: "NOAA 18",
    date: "30/11/2023 @ 11:05",
    image: "/images/satellites/2023-11-30/11-05_noaa-18/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-30/11-05_noaa-18/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA18,
    name: "NOAA 18",
    date: "28/11/2023 @ 21:30",
    image: "/images/satellites/2023-11-28/21-30_noaa-18/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-28/21-30_noaa-18/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA19,
    name: "NOAA 19",
    date: "28/11/2023 @ 19:30",
    image: "/images/satellites/2023-11-28/19-30_noaa-19/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-28/19-30_noaa-19/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA18,
    name: "NOAA 18",
    date: "27/11/2023 @ 21:30",
    image: "/images/satellites/2023-11-27/21-30_noaa-18/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-27/21-30_noaa-18/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA19,
    name: "NOAA 19",
    date: "27/11/2023 @ 19:45",
    image: "/images/satellites/2023-11-27/19-45_noaa-19/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-27/19-45_noaa-19/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA18,
    name: "NOAA 18",
    date: "26/11/2023 @ 21:45",
    image: "/images/satellites/2023-11-26/21-45_noaa-18/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-26/21-45_noaa-18/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA19,
    name: "NOAA 19",
    date: "26/11/2023 @ 20:08",
    image: "/images/satellites/2023-11-26/20-08_noaa-19/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-26/20-08_noaa-19/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA15,
    name: "NOAA 15",
    date: "26/11/2023 @ 19:15",
    image: "/images/satellites/2023-11-26/19-15_noaa-15/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-26/19-15_noaa-15/avhrr_apt_rgb_MCIR_map.png",
  },
  {
    satelliteId: SatelliteId.NOAA15,
    name: "NOAA 15",
    date: "25/11/2023 @ 18:05",
    image: "/images/satellites/2023-11-25/18-05_noaa-15/avhrr_apt_rgb_MCIR.png",
    imageMap: "/images/satellites/2023-11-25/18-05_noaa-15/avhrr_apt_rgb_MCIR_map.png",
  },
];
