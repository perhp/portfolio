import { format, subWeeks } from "date-fns";

export const getOuraSleep = async () => {
  const now = new Date();
  const oneWeekAgo = subWeeks(now, 4);

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${process.env.OURA_PERSONAL_ACCESS_TOKEN}`);

  const params = new URLSearchParams();
  params.append("start_date", format(oneWeekAgo, "yyyy-MM-dd"));
  params.append("end_date", format(now, "yyyy-MM-dd"));

  return await fetch(`https://api.ouraring.com/v2/usercollection/daily_sleep?${params.toString()}`, { headers })
    .then((res) => res.json())
    .then((res) => res.data);
};
