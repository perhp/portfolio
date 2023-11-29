export interface N2YOSatellitePosition {
  info: { satname: string; satid: number; transactionscount: number };
  positions: {
    satlatitude: number;
    satlongitude: number;
    sataltitude: number;
    azimuth: number;
    elevation: number;
    ra: number;
    dec: number;
    timestamp: number;
    eclipsed: boolean;
  }[];
}
