import { useEffect } from "react";

type Props = {
  urls: string[];
};

// A reference to the image must be kept in memory for the image to not be discarded by the browser.
const preloadImages = [];
export const usePrefetchImages = ({ urls }: Props) => {
  useEffect(() => {
    urls.forEach((url) => {
      const image = new Image();
      const imageMap = new Image();
      image.src = url;
      preloadImages.push(image);
      preloadImages.push(imageMap);
    });
  }, [urls]);
};
