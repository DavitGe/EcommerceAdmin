import { Card } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { theme } from "antd";

export interface doubleColumnPlotInterface {
  name: string;
  [key: string]: number | string;
}

interface PropsI {
  title?: string;
  data: doubleColumnPlotInterface[];
  rowName1: string;
  rowName2: string;
}

const ColumnPlots = ({ title, data, rowName1, rowName2 }: PropsI) => {
  const { token } = theme.useToken();

  return (
    <Card
      title={title}
      bordered={false}
      headStyle={{
        border: "none",
      }}
    >
      <ResponsiveContainer height={300}>
        <BarChart width={700} height={300} data={data} barGap={-12}>
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" stroke={token.colorPrimaryActive} />
          <Tooltip
            contentStyle={{
              backgroundColor: token.colorBgBase,
              border: "none",
            }}
            cursorStyle={{
              backgroundColor: token.colorBgBase,
            }}
          />
          <Legend />
          <CartesianGrid strokeDasharray="1 3" opacity={0.5} />
          <Bar
            yAxisId="left"
            dataKey={rowName1}
            fill={token.colorPrimaryActive}
            radius={[8, 8, 0, 0]}
            maxBarSize={24}
          />
          <Bar
            yAxisId="left"
            dataKey={rowName2}
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
