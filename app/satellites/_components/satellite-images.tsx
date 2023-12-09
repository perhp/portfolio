import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SatelliteImage, satelliteImages as initialSatelliteImages } from "../_data/images";

const imagesInitial = { opacity: 0, translateY: 20 };
const imagesTarget = { opacity: 1, translateY: 0 };

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
      <AnimatePresence>
        {showSatelliteImage && (
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={() => setShowSatelliteImage(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-5 lg:flex-row bg-black/50 backdrop-blur-sm focus:outline-none"
          >
            <Image
              src={showSatelliteImage.image}
              className="max-h-[calc(50vh-0.625rem)] lg:max-h-[calc(100vh-0.625rem)] lg:max-w-[calc(50%-0.625rem)]"
              alt={`${showSatelliteImage.name} ${showSatelliteImage.date}`}
              width={800}
              height={800}
              priority={true}
            />
            <Image
              src={showSatelliteImage.imageMap}
              className="max-h-[calc(50vh-0.625rem)] lg:max-h-[calc(100vh-0.625rem)] lg:max-w-[calc(50%-0.625rem)]"
              alt={`${showSatelliteImage.name} ${showSatelliteImage.date} with map`}
              width={800}
              height={800}
              priority={true}
            />
          </motion.button>
        )}
      </AnimatePresence>
      <div className="relative">
        <motion.button
          onClick={() => setActiveSatelliteId(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute z-20 px-4 py-2 text-sm -translate-x-1/2 -translate-y-full border rounded-full left-1/2 -top-48 lg:-top-64 border-white/10 bg-black/75 hover:border-white/25 backdrop-blur"
        >
          Close
        </motion.button>
        <motion.div
          key="satellite-images"
          initial={imagesInitial}
          animate={imagesTarget}
          exit={imagesInitial}
          className="z-10 grid grid-cols-1 gap-10 p-10 overflow-hidden border rounded-lg -mt-44 bg-black/50 lg:-mt-60 md:grid-cols-2 lg:grid-cols-3 backdrop-blur border-white/10"
        >
          {satelliteImages.map((satelliteImage) => (
            <div key={satelliteImage.date} className="flex flex-col">
              <button onClick={() => setShowSatelliteImage(satelliteImage)} className="relative flex group min-h-[24rem] max-h-96">
                <Image
                  src={satelliteImage.image}
                  className="relative object-cover w-full h-full rounded group-hover:hidden"
                  alt={`${satelliteImage.name} ${satelliteImage.date}`}
                  width={400}
                  height={400}
                  priority={true}
                />
                <Image
                  src={satelliteImage.imageMap}
                  className="relative hidden object-cover w-full h-full rounded group-hover:block"
                  alt={`${satelliteImage.name} ${satelliteImage.date} with map`}
                  width={400}
                  height={400}
                  priority={true}
                />
              </button>
              <h2 className="mt-2 text-2xl">{satelliteImage.name}</h2>
              <p className="text-sm text-white/50">{satelliteImage.date}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
