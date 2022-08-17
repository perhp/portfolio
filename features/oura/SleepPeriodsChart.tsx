import dynamic from "next/dynamic";

const StackedColumnsChart = dynamic(() => import("../../components/charts/StackedColumnsChart"), { ssr: false });

export const SleepPeriodsChart = ({ sleepPeriods }: { sleepPeriods: any }) => {
  const awakeSleepData: { x: Date; y: number }[] = [];
  const deepSleepData: { x: Date; y: number }[] = [];
  const remSleepData: { x: Date; y: number }[] = [];
  const lightSleepData: { x: Date; y: number }[] = [];

  for (let i = 0; i < sleepPeriods.length; i++) {
    const sleepPeriod = sleepPeriods[i];

    awakeSleepData.push({
      y: Number((sleepPeriod.awake_time / 3600).toFixed(2)),
      x: sleepPeriod.day,
    });
    deepSleepData.push({
      y: Number((sleepPeriod.deep_sleep_duration / 3600).toFixed(2)),
      x: sleepPeriod.day,
    });
    remSleepData.push({
      y: Number((sleepPeriod.rem_sleep_duration / 3600).toFixed(2)),
      x: sleepPeriod.day,
    });
    lightSleepData.push({
      y: Number((sleepPeriod.light_sleep_duration / 3600).toFixed(2)),
      x: sleepPeriod.day,
    });
  }

  return (
    <StackedColumnsChart
      id={"daily-sleep"}
      height={400}
      series={[
        {
          name: "Deep Sleep",
          data: deepSleepData,
        },
        {
          name: "REM Sleep",
          data: remSleepData,
        },
        {
          name: "Light Sleep",
          data: lightSleepData,
        },
        {
          name: "Awake Time",
          data: awakeSleepData,
        },
      ]}
    />
  );
};
