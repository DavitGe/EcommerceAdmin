import MainStats from "../../components/dashboard/MainStats";
import styled from "styled-components";
import ColumnPlots from "../../components/shared/statistics/DoubleColumnPlots";
import { Col, Row } from "antd";
import { revenueOverviewData } from "./context/revenueOverviewData";

const DashboardView = () => {
  return (
    <Wrapper>
      <MainStats />
      <Row gutter={24}>
        <Col span={12}>
          <ColumnPlots title="Revenue Overview" data={revenueOverviewData} />
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
