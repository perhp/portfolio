import { Metadata } from "next";
import Globe from "./_components/globe";
import { SatelliteId } from "./_data/images";
import { N2YOSatellitePosition } from "./_models/n2yo-satellite-position";

export const metadata: Metadata = {
  title: "Satellites - Per Hansen",
  description: "Weather satellite imagery experiments.",
};

export const revalidate = 60;
export default async function Page() {
  const apiKey = process.env.N2YO_API_KEY;
  const lat = process.env.N2YO_LATITUDE;
  const long = process.env.N2YO_LONGITUDE;

  const satellitePositions = await Promise.all<N2YOSatellitePosition>([
    fetch(`https://api.n2yo.com/rest/v1/satellite/positions/${SatelliteId.NOAA15}/${lat}/${long}/0/1/?apiKey=${apiKey}`).then((res) =>
      res.json()
    ),
    fetch(`https://api.n2yo.com/rest/v1/satellite/positions/${SatelliteId.NOAA18}/${lat}/${long}/0/1/?apiKey=${apiKey}`).then((res) =>
      res.json()
    ),
    fetch(`https://api.n2yo.com/rest/v1/satellite/positions/${SatelliteId.NOAA19}/${lat}/${long}/0/1/?apiKey=${apiKey}`).then((res) =>
      res.json()
    ),
    fetch(`https://api.n2yo.com/rest/v1/satellite/positions/${SatelliteId.METEORM23}/${lat}/${long}/0/1/?apiKey=${apiKey}`).then((res) =>
      res.json()
    ),
  ]);

  return (
    <div className="p-8 sm:p-16">
      <h1 className="text-sm tracking-wider text-center uppercase">My satellite images</h1>
      <p className="text-xs tracking-wider text-center text-white/50">The sphere illustrates the current location of the satellites.</p>
      <Globe satellitePositions={satellitePositions} />
    </div>
  );
}
