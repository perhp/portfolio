import { format } from "date-fns";
import { DailyReadiness, DailySleep, SleepPeriod } from "./model";

export const getOuraDailySleep = async (startDate?: Date): Promise<DailySleep[]> => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${process.env.OURA_PERSONAL_ACCESS_TOKEN}`);

  const params = new URLSearchParams();

  if (startDate) {
    params.append("start_date", format(startDate, "yyyy-MM-dd"));
  }

  return await fetch(`https://api.ouraring.com/v2/usercollection/daily_sleep?${params.toString()}`, { headers })
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getOuraDailyReadiness = async (startDate?: Date): Promise<DailyReadiness[]> => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${process.env.OURA_PERSONAL_ACCESS_TOKEN}`);

  const params = new URLSearchParams();

  if (startDate) {
    params.append("start_date", format(startDate, "yyyy-MM-dd"));
  }

  return await fetch(`https://api.ouraring.com/v2/usercollection/daily_readiness?${params.toString()}`, { headers })
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getOuraSleepPeriods = async (startDate?: Date): Promise<SleepPeriod[]> => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${process.env.OURA_PERSONAL_ACCESS_TOKEN}`);

  const params = new URLSearchParams();

  if (startDate) {
    params.append("start_date", format(startDate, "yyyy-MM-dd"));
  }

  return await fetch(`https://api.ouraring.com/v2/usercollection/sleep?${params.toString()}`, { headers })
    .then((res) => res.json())
    .then((res) => res.data.filter((sleep: any) => sleep.total_sleep_duration > 60 * 60));
};
