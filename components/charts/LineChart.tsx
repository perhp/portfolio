import { ApexOptions } from "apexcharts";
import { format } from "date-fns";
import ReactApexChart from "react-apexcharts";

type LineChartProps = {
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

export default function LineChart({ id, series, height }: LineChartProps) {
  const seriesData = series;
  const options: ApexOptions = {
    chart: {
      id: `${id}-chart`,
      height: 400,
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    stroke: {
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 0,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
        formatter: function (val) {
          return `${format(new Date(val), "eeee, dd MMMM")}`;
        },
        rotateAlways: true,
      },
      tooltip: {
        enabled: false,
      },
    },
    legend: {
      offsetY: 8,
    },
  };

  return <ReactApexChart options={options as any} series={seriesData} height={height} type={"area"} />;
}
