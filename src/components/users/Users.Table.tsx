import React, { useState } from "react";
import AdProTable from "../shared/dataEntry/AdProTable";
import { Button, Card, Space, Typography } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { ProFormText } from "@ant-design/pro-components";
import { exportToExcel } from "../../utils/exportToExcel";
import { usersTableColumns } from "./UsersTable.columns";
import { usersTableData } from "./UsersTable.data";

const UsersTable = () => {
  const [search, setSearch] = useState<string>();

  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function exportExcel() {
    exportToExcel(
      usersTableData.filter((el) => el.name.includes(search ?? "")),
      "usersList",
      "Users List"
    );
  }

  return (
    <Card bordered={false}>
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          List of Users
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
        columns={usersTableColumns}
        dataSource={usersTableData.filter((el) =>
          el.name.includes(search ?? "")
        )}
      />
    </Card>
  );
};

export default UsersTable;
