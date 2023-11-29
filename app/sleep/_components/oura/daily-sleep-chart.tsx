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
      index="day"
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
      showAnimation={false}
      onValueChange={() => {}}
      className="h-96"
    />
  );
};
