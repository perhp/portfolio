"use client";

import { BarChart } from "@tremor/react";
import { SleepPeriod } from "./oura/api";

enum DailySleepDictionary {
  DeepSleep = "Deep Sleep",
  REMSleep = "REM Sleep",
  Latency = "Latency",
  Timing = "Timing",
  Restfulness = "Restfulness",
  TotalSleep = "Total Sleep",
}

export const SleepPeriodsChart = ({ sleepPeriods }: { sleepPeriods: SleepPeriod[] }) => {
  console.log(JSON.stringify(sleepPeriods));
  return (
    <BarChart
      data={[]}
      categories={[]}
      dataKey="day"
      showGradient={true}
      startEndOnly={false}
      showXAxis={true}
      showYAxis={true}
      showTooltip={true}
      showLegend={true}
      showGridLines={true}
      showAnimation={false}
      height="h-96"
    />
  );
};
