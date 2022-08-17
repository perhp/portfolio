import { ApexOptions } from "apexcharts";
import { format } from "date-fns";
import ReactApexChart from "react-apexcharts";

type StackedColumnsChartProps = {
  series: {
    name: string;
    data: {
      x: Date;
      y: number;
    }[];
  }[];
  id: string;
  height: number;
};

export default function StackedColumnsChart({ id, series, height }: StackedColumnsChartProps) {
  const options: ApexOptions = {
    chart: {
      id: `${id}-chart`,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 3,
        rangeBarGroupRows: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return `${val}h`;
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
        formatter: (val, opts) => {
          const options = opts as unknown as { dataPointIndex: number; series: number[][]; seriesIndex: number };

          if (typeof options !== "object") {
            return `${format(new Date(val), "eeee, dd MMMM")}`;
          }

          const totalHoursSlept = options.series
            .slice(0, 3)
            .reduce((acc, curr) => acc + curr[options.dataPointIndex], 0)
            .toFixed(2);
          const hours = totalHoursSlept.split(".")[0];
          const minutes = (60 * Number(`0.${totalHoursSlept.split(".")[1]}`)).toFixed(0);

          return `${format(new Date(val), "eeee, dd MMMM")}, ${
            Number(hours) > 0 ? `${hours} hours and ` : ""
          }${minutes} minutes of sleep`;
        },
        hideOverlappingLabels: false,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => {
          const fixedValue = val.toFixed(2);
          const hours = fixedValue.split(".")[0];
          const minutes = (60 * Number(`0.${fixedValue.split(".")[1]}`)).toFixed(0);

          return `${Number(hours) > 0 ? `${hours} hours and ` : ""}${minutes} minutes`;
        },
      },
    },
  };

  return <ReactApexChart options={options} series={series} height={height} type={"bar"} />;
}
