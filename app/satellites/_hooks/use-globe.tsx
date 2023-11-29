import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { N2YOSatellitePosition } from "../_models/n2yo-satellite-position";

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  satellitePositions: N2YOSatellitePosition[];
  activeSatelliteId: React.MutableRefObject<N2YOSatellitePosition["info"]["satid"] | null>;
};

export const useGlobe = ({ canvasRef, activeSatelliteId, satellitePositions }: Props) => {
  const focusRef = useRef<[number, number]>([0, 0]);
  const dragRef = useRef<number>(0);
  const pointerInteractionLocation = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const doublePi = Math.PI * 2;
  const width = useRef(0);
  const currentPhi = useRef(0);
  const currentTheta = useRef(0);

  const setPointerInteracting = (value: number | null) => {
    pointerInteractionLocation.current = value;
  };

  const handleGlobeMouseMove = (e: MouseEvent) => {
    if (pointerInteractionLocation.current !== null) {
      const delta = e.clientX - pointerInteractionLocation.current;
      pointerInteractionMovement.current = delta;
      dragRef.current = delta / 200;
    }
  };

  const handleGlobeTouchMove = (e: TouchEvent) => {
    if (pointerInteractionLocation.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteractionLocation.current;
      pointerInteractionMovement.current = delta;
      dragRef.current = delta / 100;
    }
  };

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const onResize = () => canvasRef.current && (width.current = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    canvasRef.current.addEventListener("pointerdown", (e) => setPointerInteracting(e.clientX - pointerInteractionMovement.current));
    canvasRef.current.addEventListener("pointerup", () => setPointerInteracting(null));
    canvasRef.current.addEventListener("pointerout", () => setPointerInteracting(null));
    canvasRef.current.addEventListener("mousemove", handleGlobeMouseMove);
    canvasRef.current.addEventListener("touchmove", handleGlobeTouchMove);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width.current * 2,
      height: width.current * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1,
      mapSamples: 20000,
      mapBrightness: 1.1,
      baseColor: [1, 1, 1],
      markerColor: [200, 200, 200],
      glowColor: [1, 1, 1],
      markers: satellitePositions.map(({ positions: [{ satlatitude, satlongitude }] }) => ({
        location: [satlatitude, satlongitude],
        size: 0.05,
      })),
      onRender: (state) => {
        state.phi = currentPhi.current;
        state.theta = currentTheta.current;
        const [focusPhi, focusTheta] = activeSatelliteId.current ? focusRef.current : [dragRef.current, 0];
        const distPositive = (focusPhi - currentPhi.current + doublePi) % doublePi;
        const distNegative = (currentPhi.current - focusPhi + doublePi) % doublePi;

        if (distPositive < distNegative) {
          currentPhi.current += distPositive * 0.08;
        } else {
          currentPhi.current -= distNegative * 0.08;
        }

        currentTheta.current = currentTheta.current * 0.92 + focusTheta * 0.08;

        state.width = width.current * 2;
        state.height = width.current * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return { focusRef };
};
