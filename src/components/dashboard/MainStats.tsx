import { Col, Row } from "antd";
import CardStats from "../shared/statistics/CardStats";

const MainStats = () => {
  return (
    <Row gutter={[24, 8]} justify={"space-between"}>
      <Col xs={24} sm={24} md={12} xl={6}>
        <CardStats title="Sales" value={15.2} positive />
      </Col>
      <Col xs={24} sm={24} md={12} xl={6}>
        <CardStats title="Revenue" value={22.8} positive />
      </Col>
      <Col xs={24} sm={24} md={12} xl={6}>
        <CardStats title="Visitors" value={24} positive={false} />
      </Col>
      <Col xs={24} sm={24} md={12} xl={6}>
        <CardStats title="Stocks" value={30} positive />
      </Col>
    </Row>
  );
};

export default MainStats;
