export interface WakatimeSummary {
  grand_total: {
    digital: string;
    hours: number;
    minutes: number;
    text: string;
    total_seconds: number;
  };
  categories: {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    text: string;
    hours: number;
    minutes: number;
  }[];
  projects: {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    text: string;
    hours: number;
    minutes: number;
  }[];
  languages: {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    text: string;
    hours: number;
    minutes: number;
    seconds: number;
  }[];
  editors: {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    text: string;
    hours: number;
    minutes: number;
    seconds: number;
  }[];
  operating_systems: {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    text: string;
    hours: number;
    minutes: number;
    seconds: number;
  }[];
  dependencies: {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    text: string;
    hours: number;
    minutes: number;
    seconds: number;
  }[];
  machines: {
    name: string;
    machine_name_id: string;
    total_seconds: number;
    percent: number;
    digital: string;
    text: string;
    hours: number;
    minutes: number;
    seconds: number;
  }[];
  branches: {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    text: string;
    hours: number;
    minutes: number;
    seconds: number;
  }[];
  entities: {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    text: string;
    hours: number;
    minutes: number;
    seconds: number;
  }[];
  range: {
    date: string;
    start: string;
    end: string;
    text: string;
    timezone: string;
  };
}

export interface WakatimeLanguageSummary {
  name: string;
  seconds: number;
}

export const getWakatimeSummaries = async (): Promise<WakatimeSummary[]> => {
  const params = new URLSearchParams();
  params.append("api_key", process.env.WAKATIME_ACCESS_TOKEN as string);
  params.append("range", "Last 14 Days");

  return await fetch(`https://wakatime.com/api/v1/users/current/summaries?${params.toString()}`)
    .then((res) => res.json())
    .then((res) => res.data);
};
