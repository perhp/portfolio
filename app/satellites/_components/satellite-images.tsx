import { motion } from "framer-motion";
import { satelliteImages as initialSatelliteImages } from "../_data/images";

type Props = {
  activeSatelliteId: number | null;
  setActiveSatelliteId: (satelliteId: number | null) => void;
};

export default function SatelliteImages({ activeSatelliteId, setActiveSatelliteId }: Props) {
  const satelliteImages = initialSatelliteImages.filter((satelliteImage) => satelliteImage.satelliteId === activeSatelliteId);

  return (
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
          <div className="relative flex group min-h-[24rem] max-h-96">
            <img
              src={satelliteImage.image}
              alt={satelliteImage.name + " with map"}
              className="relative object-cover rounded group-hover:hidden"
            />
            <img
              src={satelliteImage.imageMap}
              alt={satelliteImage.name + " with map"}
              className="relative hidden object-cover rounded group-hover:block"
            />
          </div>
          <h2 className="mt-2 text-2xl">{satelliteImage.name}</h2>
          <p className="text-sm text-white/50">{satelliteImage.date}</p>
        </div>
      ))}
    </motion.div>
  );
}
