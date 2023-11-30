import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SatelliteImage, satelliteImages as initialSatelliteImages } from "../_data/images";

type Props = {
  activeSatelliteId: number | null;
  setActiveSatelliteId: (satelliteId: number | null) => void;
};

export default function SatelliteImages({ activeSatelliteId, setActiveSatelliteId }: Props) {
  const [showSatelliteImage, setShowSatelliteImage] = useState<SatelliteImage | null>(null);
  const satelliteImages = initialSatelliteImages.filter((satelliteImage) => satelliteImage.satelliteId === activeSatelliteId);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setShowSatelliteImage(null);
      }
    });
  }, []);

  return (
    <>
      {showSatelliteImage && (
        <button
          onClick={() => setShowSatelliteImage(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-5 lg:flex-row bg-black/50 backdrop-blur-sm focus:outline-none"
        >
          <img
            src={showSatelliteImage.image}
            className="max-h-[calc(50vh-0.625rem)] lg:max-h-[calc(100vh-0.625rem)] lg:max-w-[calc(50%-0.625rem)]"
            alt=""
          />
          <img
            src={showSatelliteImage.imageMap}
            className="max-h-[calc(50vh-0.625rem)] lg:max-h-[calc(100vh-0.625rem)] lg:max-w-[calc(50%-0.625rem)]"
            alt=""
          />
        </button>
      )}
      <motion.div
        key="satellite-images"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 20 }}
        className="relative z-10 grid grid-cols-1 gap-10 p-10 border rounded-lg -mt-28 bg-black/50 lg:-mt-60 md:grid-cols-2 lg:grid-cols-3 backdrop-blur border-white/10"
      >
        <button
          onClick={() => setActiveSatelliteId(null)}
          className="absolute px-4 py-2 text-sm -translate-x-1/2 -translate-y-full border rounded-full left-1/2 -top-5 border-white/10 bg-black/75 hover:border-white/25 backdrop-blur"
        >
          Close
        </button>
        {satelliteImages.map((satelliteImage) => (
          <div key={satelliteImage.date} className="flex flex-col">
            <button onClick={() => setShowSatelliteImage(satelliteImage)} className="relative flex group min-h-[24rem] max-h-96">
              <Image
                src={satelliteImage.image}
                alt={satelliteImage.name + " with map"}
                width={500}
                height={500}
                className="relative object-cover w-full h-full rounded group-hover:hidden"
              />
              <Image
                src={satelliteImage.imageMap}
                alt={satelliteImage.name + " with map"}
                width={500}
                height={500}
                className="relative hidden object-cover w-full h-full rounded group-hover:block"
              />
            </button>
            <h2 className="mt-2 text-2xl">{satelliteImage.name}</h2>
            <p className="text-sm text-white/50">{satelliteImage.date}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
}
