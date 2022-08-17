import dynamic from "next/dynamic";

const LineChart = dynamic(() => import("../../components/charts/LineChart"), { ssr: false });

export const DailySleepChart = ({ dailySleep }: { dailySleep: any }) => {
  return (
    <LineChart
      id={"daily-sleep"}
      height={400}
      series={[
        {
          name: "Overall",
          data: dailySleep.map((sleep: any) => ({ x: sleep.day, y: sleep.score })),
        },
        {
          name: "REM",
          data: dailySleep.map((sleep: any) => ({ x: sleep.day, y: sleep.contributors.rem_sleep })),
        },
        {
          name: "Deep Sleep",
          data: dailySleep.map((sleep: any) => ({ x: sleep.day, y: sleep.contributors.deep_sleep })),
        },
        {
          name: "Restfulness",
          data: dailySleep.map((sleep: any) => ({ x: sleep.day, y: sleep.contributors.restfulness })),
        },
        {
          name: "Timing",
          data: dailySleep.map((sleep: any) => ({ x: sleep.day, y: sleep.contributors.timing })),
        },
        {
          name: "Latency",
          data: dailySleep.map((sleep: any) => ({ x: sleep.day, y: sleep.contributors.latency })),
        },
      ]}
    />
  );
};
