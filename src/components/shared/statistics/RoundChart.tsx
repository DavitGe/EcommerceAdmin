import { Card } from "antd";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { theme } from "antd";

interface dataInterface {
  name: string;
  value: number;
}

interface PropsI {
  title: string;
  data: dataInterface[];
}

const RoundChart = ({ title, data }: PropsI) => {
  const { token } = theme.useToken();
  const COLORS = [
    token.colorPrimaryActive,
    token.colorPrimaryHover,
    token.colorPrimary,
  ];

  return (
    <Card
      title={title}
      bordered={false}
      headStyle={{
        border: "none",
      }}
      bodyStyle={{
        paddingTop: 0,
      }}
    >
      <ResponsiveContainer width="100%" height="100%" minHeight={324}>
        <PieChart>
          <Legend direction={3} />
          <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value">
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RoundChart;
