"use client";

import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useGlobe } from "../_hooks/use-globe";
import { N2YOSatellitePosition } from "../_models/n2yo-satellite-position";
import { locationToAngles } from "../_utils/location-to-angles";
import SatelliteImages from "./satellite-images";

type Props = {
  satellitePositions: N2YOSatellitePosition[];
};

export default function Globe({ satellitePositions }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [showSatelliteImages, setShowSatelliteImages] = useState(false);
  const activeSatelliteId = useRef<N2YOSatellitePosition["info"]["satid"] | null>(null);

  const { focusRef } = useGlobe({
    activeSatelliteId,
    canvasRef,
    satellitePositions,
  });

  const setActiveSatelliteId = (satelliteId: N2YOSatellitePosition["info"]["satid"] | null) => {
    activeSatelliteId.current = satelliteId;
    setShowSatelliteImages(Boolean(satelliteId));
  };

  const onSelectSatellite = (
    satelliteId: N2YOSatellitePosition["info"]["satid"],
    latitude: N2YOSatellitePosition["positions"][number]["satlatitude"],
    longtitude: N2YOSatellitePosition["positions"][number]["satlongitude"]
  ) => {
    setActiveSatelliteId(satelliteId);
    focusRef.current = locationToAngles(latitude, longtitude);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl aspect-square">
        <canvas ref={canvasRef} className={"w-full h-full"} />
      </div>
      <div className="grid justify-center grid-cols-2 gap-3 lg:grid-cols-4">
        {satellitePositions.map((satellitePosition) => (
          <button
            key={satellitePosition.info.satid}
            onClick={() => {
              const { satlatitude, satlongitude } = satellitePosition.positions[0];
              onSelectSatellite(satellitePosition.info.satid, satlatitude, satlongitude);
            }}
            className="px-3 py-2 text-xs border rounded-md bg-white/5 border-white/10 hover:bg-white/10"
          >
            {satellitePosition.info.satname}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {showSatelliteImages && (
          <SatelliteImages activeSatelliteId={activeSatelliteId.current} setActiveSatelliteId={setActiveSatelliteId} />
        )}
      </AnimatePresence>
    </div>
  );
}
