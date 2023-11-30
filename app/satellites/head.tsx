import React from "react";
import { satelliteImages } from "./_data/images";

export default function Head() {
  return (
    <>
      <title>Per Hansen - Satellites</title>
      <meta name="description" content="Weather satellite imagery experiments." />
      {satelliteImages.map((satelliteImage) => (
        <React.Fragment key={satelliteImage.date}>
          <link rel="preload" href={satelliteImage.image} as="image" />
          <link rel="preload" href={satelliteImage.imageMap} as="image" />
        </React.Fragment>
      ))}
    </>
  );
}
