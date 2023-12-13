import MainStats from "../../components/dashboard/MainStats";
import styled from "styled-components";
import ColumnPlots from "../../components/shared/statistics/DoubleColumnPlots";
import { Col, Row } from "antd";
import { revenueOverviewData } from "./context/revenueOverviewData";
import RoundChart from "../../components/shared/statistics/RoundChart";
import { salesByCategoryData } from "./context/salesByCategoryData";
import HalfRoundChart from "../../components/shared/statistics/HalfRoundChart";

const DashboardView = () => {
  const data = [
    { name: "New visitors", value: 650 },
    { name: "Already registered", value: 300 },
  ];
  return (
    <Wrapper>
      <MainStats />
      <Row gutter={24}>
        <Col span={12}>
          <ColumnPlots
            title="Revenue Overview"
            data={revenueOverviewData}
            rowName1="Revenue"
            rowName2="Profit"
          />
        </Col>
        <Col span={6}>
          <RoundChart title="Sales by Category" data={salesByCategoryData} />
        </Col>
        <Col span={6}>
          <HalfRoundChart title="Website visitors" data={data} />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default DashboardView;
