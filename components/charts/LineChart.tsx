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
  showTools?: boolean;
  height: number;
};

export default function LineChart({ id, series, height }: LineChartProps) {
  const seriesData = series;
  const options = {
    chart: {
      id: `${id}-chart`,
      type: "area",
      height: 400,
      toolbar: false,
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
        formatter: function (val: number) {
          return `${new Date(val).getDate()}/${new Date(val).getMonth() + 1}`;
        },
      },
    },
    legend: {
      show: true,
      position: "right",
    },
  };

  return <ReactApexChart options={options as any} series={seriesData} type="area" height={height} />;
}
