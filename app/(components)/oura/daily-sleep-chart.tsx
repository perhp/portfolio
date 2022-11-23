"use client";

import { LineChart } from "@tremor/react";
import { format } from "date-fns";
import { DailySleep } from "./model";

enum DailySleepDictionary {
  DeepSleep = "Deep Sleep",
  REMSleep = "REM Sleep",
  Latency = "Latency",
  Timing = "Timing",
  Restfulness = "Restfulness",
  TotalSleep = "Total Sleep",
}

export const DailySleepChart = ({ dailySleep }: { dailySleep: DailySleep[] }) => {
  return (
    <LineChart
      data={dailySleep.map((sleep) => ({
        ...sleep,
        day: format(new Date(sleep.timestamp), "eeee dd MMM."),
        [DailySleepDictionary.DeepSleep]: sleep.contributors.deep_sleep,
        [DailySleepDictionary.REMSleep]: sleep.contributors.rem_sleep,
        [DailySleepDictionary.Latency]: sleep.contributors.latency,
        [DailySleepDictionary.Timing]: sleep.contributors.timing,
        [DailySleepDictionary.Restfulness]: sleep.contributors.restfulness,
        [DailySleepDictionary.TotalSleep]: sleep.contributors.total_sleep,
      }))}
      categories={[
        DailySleepDictionary.DeepSleep,
        DailySleepDictionary.REMSleep,
        DailySleepDictionary.Latency,
        DailySleepDictionary.Timing,
        DailySleepDictionary.Restfulness,
        DailySleepDictionary.TotalSleep,
      ]}
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
