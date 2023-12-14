import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Sector,
} from "recharts";
import { Card, theme } from "antd";
import { useState } from "react";

interface dataInterface {
  name: string;
  value: number;
}

interface PropsI {
  title: string;
  data: dataInterface[];
}

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={-32} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        fill={fill}
        style={{ fontSize: 32, fontWeight: 600 }}
      >
        {Math.round(percent * 100)}%
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

const HalfRoundChart = ({ title, data }: PropsI) => {
  const [activeState, setActiveState] = useState(0);

  const { token } = theme.useToken();
  const COLORS = [
    token.colorPrimaryActive,
    token.colorPrimaryHover,
    token.colorPrimary,
  ];

  const onPieEnter = (_: any, index: number) => {
    setActiveState(index);
  };

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
          <Legend />

          <Pie
            data={data}
            activeIndex={activeState}
            activeShape={renderActiveShape}
            startAngle={180}
            endAngle={0}
            innerRadius={100}
            outerRadius={120}
            dataKey="value"
            textAnchor="sss"
            onMouseEnter={onPieEnter}
            stroke="none"
          >
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

export default HalfRoundChart;
