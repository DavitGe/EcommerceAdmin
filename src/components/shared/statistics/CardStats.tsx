import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Statistic } from "antd";

interface PropsInterface {
  positive: boolean;
  value: number;
  title: string;
}

const CardStats = ({ positive, value, title }: PropsInterface) => {
  return (
    <Card bordered={false} style={{ width: "100%" }}>
      <Statistic
        title={title}
        value={value}
        precision={2}
        valueStyle={{ color: positive ? "#3f8600" : "#cf1322" }}
        prefix={positive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        style={{ width: "100%" }}
        suffix="%"
      />
    </Card>
  );
};

export default CardStats;
