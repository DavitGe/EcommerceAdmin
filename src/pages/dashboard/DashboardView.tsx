import MainStats from "../../components/dashboard/MainStats";
import styled from "styled-components";
import ColumnPlots from "../../components/shared/statistics/DoubleColumnPlots";
import { Col, Row } from "antd";
import { revenueOverviewData } from "./context/revenueOverviewData";
import RoundChart from "../../components/shared/statistics/RoundChart";
import { salesByCategoryData } from "./context/salesByCategoryData";
import HalfRoundChart from "../../components/shared/statistics/HalfRoundChart";
import DashboardTable from "../../components/dashboard/table/Dashboard.table";
import DashboardList from "../../components/dashboard/list/Dashboard.list";

const DashboardView = () => {
  const data = [
    { name: "New visitors", value: 650 },
    { name: "Already registered", value: 300 },
  ];
  return (
    <Wrapper>
      <MainStats />
      <Row gutter={[24, 12]}>
        <Col xs={24} sm={24} md={24} xl={12}>
          <ColumnPlots
            title="Revenue Overview"
            data={revenueOverviewData}
            rowName1="Revenue"
            rowName2="Profit"
          />
        </Col>
        <Col xs={24} sm={24} md={12} xl={6}>
          <HalfRoundChart title="Website visitors" data={data} />
        </Col>
        <Col xs={24} sm={24} md={12} xl={6}>
          <RoundChart title="Sales by Category" data={salesByCategoryData} />
        </Col>
      </Row>
      <Row gutter={[24, 12]}>
        <DashboardTable />
        <DashboardList />
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
