import ReactApexChart, { Props } from 'react-apexcharts'

type ChartProps = {
  settings: Props
}

export default function Chart({ settings }: ChartProps) {
  return (
    <ReactApexChart
      options={settings.options}
      series={settings.series}
      type={settings.type}
      width={settings.width}
    />
  )
}
