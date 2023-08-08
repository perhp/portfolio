import { subMonths } from "date-fns";
import { getOuraDailySleep, getOuraSleepPeriods } from "../_components/oura/api";
import { DailySleepChart } from "../_components/oura/daily-sleep-chart";
import { SleepPeriodsChart } from "../_components/oura/sleep-periods-chart";

// Revalidate every 60 minutes
export const revalidate = 3600;

export default async function Page() {
  const now = new Date();
  const oneMonthAgo = subMonths(now, 1);

  const ouraDailySleep = await getOuraDailySleep(oneMonthAgo);
  const ouraSleepPeriods = await getOuraSleepPeriods(oneMonthAgo);

  return (
    <>
      <div className="p-8 sm:p-16">
        <p className="text-sm tracking-wider text-center uppercase">These are my sleep scores the past month.</p>
        <div className="flex flex-col gap-10 p-5 mt-10 bg-white/5">
          <DailySleepChart dailySleep={ouraDailySleep} />
          <SleepPeriodsChart sleepPeriods={ouraSleepPeriods} />
        </div>
      </div>
    </>
  );
}
