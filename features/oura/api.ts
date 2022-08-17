import { format, subMonths } from "date-fns";

export const getOuraDailySleep = async () => {
  const now = new Date();
  const startDate = subMonths(now, 1);

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${process.env.OURA_PERSONAL_ACCESS_TOKEN}`);

  const params = new URLSearchParams();
  params.append("start_date", format(startDate, "yyyy-MM-dd"));

  return await fetch(`https://api.ouraring.com/v2/usercollection/daily_sleep?${params.toString()}`, { headers })
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getOuraSleepPeriods = async () => {
  const now = new Date();
  const startDate = subMonths(now, 1);

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${process.env.OURA_PERSONAL_ACCESS_TOKEN}`);

  const params = new URLSearchParams();
  params.append("start_date", format(startDate, "yyyy-MM-dd"));

  return await fetch(`https://api.ouraring.com/v2/usercollection/sleep?${params.toString()}`, { headers })
    .then((res) => res.json())
    .then((res) => res.data);
};
