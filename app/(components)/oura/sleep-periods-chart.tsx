"use client";

import { BarChart } from "@tremor/react";
import { format } from "date-fns";
import { SleepPeriod } from "./model";

enum SleepPeriodDictionary {
  AwakeTime = "Awake",
  DeepSleepDuration = "Deep Sleep",
  RemSleepDuration = "REM Sleep",
  LightSleepDuration = "Light Sleep",
}

export const SleepPeriodsChart = ({ sleepPeriods }: { sleepPeriods: SleepPeriod[] }) => {
  return (
    <BarChart
      data={sleepPeriods.map((sleep) => ({
        ...sleep,
        day: format(new Date(sleep.day), "dd MMM."),
        [SleepPeriodDictionary.AwakeTime]: sleep.awake_time,
        [SleepPeriodDictionary.DeepSleepDuration]: sleep.deep_sleep_duration,
        [SleepPeriodDictionary.RemSleepDuration]: sleep.rem_sleep_duration,
        [SleepPeriodDictionary.LightSleepDuration]: sleep.light_sleep_duration,
      }))}
      categories={[
        SleepPeriodDictionary.AwakeTime,
        SleepPeriodDictionary.DeepSleepDuration,
        SleepPeriodDictionary.RemSleepDuration,
        SleepPeriodDictionary.LightSleepDuration,
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
      stack={true}
      height="h-96"
    />
  );
};
