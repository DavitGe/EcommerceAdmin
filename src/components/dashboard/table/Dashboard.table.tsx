import { Button, Card, Col, Space, Typography } from "antd";
import AdProTable from "../../shared/dataDisplay/AdProTable";
import { recentSalesData } from "./table.data";
import { recentSalesColumns } from "./table.columns";
import { ProFormText } from "@ant-design/pro-components";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { exportToExcel } from "../../../utils/exportToExcel";

const DashboardTable = () => {
  const [search, setSearch] = useState<string>();

  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function exportExcel() {
    exportToExcel(
      recentSalesData.filter((el) => el.name.includes(search ?? "")),
      "RecentSales",
      "Recent Sales"
    );
  }

  return (
    <Col xs={24} sm={24} md={24} xl={16}>
      <Card bordered={false}>
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Typography.Title level={5} style={{ margin: 0 }}>
            Recent Sales
          </Typography.Title>
          <Space size={24}>
            <ProFormText
              placeholder={"search"}
              noStyle
              fieldProps={{
                prefix: <SearchOutlined style={{ color: "#9d9d9d" }} />,
                size: "large",
                style: {
                  borderRadius: 24,
                },
                value: search,
                onChange: searchHandler,
              }}
            />
            <Button
              type="primary"
              style={{
                height: 40,
                width: 40,
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={exportExcel}
            >
              <DownloadOutlined style={{ fontSize: 16 }} />
            </Button>
          </Space>
        </Space>
        <AdProTable
          columns={recentSalesColumns}
          dataSource={recentSalesData.filter((el) =>
            el.name.includes(search ?? "")
          )}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </Col>
  );
};

export default DashboardTable;
