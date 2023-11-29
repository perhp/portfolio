"use client";

import createGlobe from "cobe";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { N2YOSatellitePosition } from "../_models/n2yo-satellite-position";
import { satelliteImages } from "../data/images";

type Props = {
  satellitePositions: N2YOSatellitePosition[];
};

export default function Globe({ satellitePositions }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const locationToAngles = (lat: number, long: number) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
  };
  const focusRef = useRef([0, 0]);
  const [activeSatelliteId, setActiveSatelliteId] = useState<N2YOSatellitePosition["info"]["satid"] | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1,
      mapSamples: 16000,
      mapBrightness: 1.1,
      baseColor: [1, 1, 1],
      markerColor: [255, 255, 255],
      glowColor: [1, 1, 1],
      markers: satellitePositions.map((satellitePosition) => ({
        location: [satellitePosition.positions[0].satlatitude, satellitePosition.positions[0].satlongitude],
        size: 0.1,
      })),
      onRender: (state) => {
        state.phi = currentPhi;
        state.theta = currentTheta;
        const [focusPhi, focusTheta] = focusRef.current;
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;

        if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08;
        } else {
          currentPhi -= distNegative * 0.08;
        }

        currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl aspect-square">
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%", contain: "layout paint size" }} />
      </div>
      <div className="flex justify-center gap-3">
        {satellitePositions.map((satellitePosition) => (
          <button
            key={satellitePosition.info.satid}
            onClick={() => {
              focusRef.current = locationToAngles(satellitePosition.positions[0].satlatitude, satellitePosition.positions[0].satlongitude);
              setActiveSatelliteId(satellitePosition.info.satid);
            }}
            className="px-3 py-2 text-xs border rounded-md bg-white/5 border-white/10 hover:bg-white/10"
          >
            {satellitePosition.info.satname}
          </button>
        ))}
      </div>
      {activeSatelliteId && (
        <div className="relative z-10 grid grid-cols-1 gap-10 p-10 border rounded-lg -mt-28 bg-black/50 lg:-mt-60 md:grid-cols-2 lg:grid-cols-3 backdrop-blur border-white/10">
          <button
            onClick={() => setActiveSatelliteId(null)}
            className="absolute px-4 py-2 text-sm -translate-x-1/2 -translate-y-full border rounded-full left-1/2 -top-5 border-white/10 bg-black/75 hover:border-white/25 backdrop-blur"
          >
            Close
          </button>
          {satelliteImages
            .filter((satelliteImage) => satelliteImage.satelliteId === activeSatelliteId)
            .map((satelliteImage) => (
              <div key={satelliteImage.date} className="flex flex-col">
                <div className="relative flex group max-h-96">
                  <Image
                    src={satelliteImage.image}
                    alt={satelliteImage.name + " with map"}
                    width={800}
                    height={800}
                    className="relative object-cover rounded group-hover:hidden"
                  />
                  <Image
                    src={satelliteImage.imageMap}
                    alt={satelliteImage.name + " with map"}
                    width={800}
                    height={800}
                    className="relative hidden object-cover rounded group-hover:block"
                  />
                </div>
                <h2 className="mt-2 text-2xl">{satelliteImage.name}</h2>
                <p className="text-sm text-white/50">{satelliteImage.date}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
