import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { WakatimeLanguageSummary } from "./api";

export default function LanguagesSummariesChart({
  languagesSummaries,
}: {
  languagesSummaries: WakatimeLanguageSummary[];
}) {
  const totalSeconds = languagesSummaries
    .filter((summary) => summary.seconds > 60)
    .reduce((acc, summary) => (acc += summary.seconds), 0);

  const seriesData = [
    {
      data: languagesSummaries
        .filter((summary) => summary.seconds > 60)
        .map((summary) => ({ x: summary.name, y: summary.seconds })),
    },
  ];

  const options: ApexOptions = {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => {
          return `${((val / totalSeconds) * 100).toFixed(2)}%`;
        },
      },
    },
  };

  return <ReactApexChart options={options as any} series={seriesData} height={350} type={"treemap"} />;
}
