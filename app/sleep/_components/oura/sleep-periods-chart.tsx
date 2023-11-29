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
        day: format(new Date(sleep.day), "eeee dd MMM."),
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
      index="day"
      stack={true}
      valueFormatter={(value) => {
        const fixedValue = (value / 60 / 60).toFixed(2);
        const hours = fixedValue.split(".")[0];
        const minutes = (60 * Number(`0.${fixedValue.split(".")[1]}`)).toFixed(0);

        return `${Number(hours) > 0 ? `${hours}h ` : ""}${minutes}m`;
      }}
      className="h-96"
    />
  );
};
