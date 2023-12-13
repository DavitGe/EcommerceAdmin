import { Card } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { theme } from "antd";

export interface doubleColumnPlotInterface {
  name: string;
  uv: number;
  pv: number;
}

interface PropsI {
  title?: string;
  data: doubleColumnPlotInterface[];
}

const ColumnPlots = ({ title, data }: PropsI) => {
  const { token } = theme.useToken();

  return (
    <Card
      title={title}
      bordered={false}
      headStyle={{
        border: "none",
      }}
    >
      <ResponsiveContainer height={324}>
        <BarChart width={700} height={300} data={data} barGap={-12}>
          <XAxis dataKey="name" />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke={token.colorPrimaryActive}
          />
          <Tooltip />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="pv"
            fill={token.colorPrimaryActive}
            radius={[8, 8, 0, 0]}
            maxBarSize={24}
          />
          <Bar
            yAxisId="left"
            dataKey="uv"
            fill={token.colorPrimaryHover}
            radius={[8, 8, 0, 0]}
            maxBarSize={24}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ColumnPlots;
