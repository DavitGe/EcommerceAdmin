import React, { useState } from "react";
import { Button, Card, Form, Space, Typography } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { EditableProTable, ProFormText } from "@ant-design/pro-components";
import { exportToExcel } from "../../utils/exportToExcel";
import { UsersDataType, usersTableColumns } from "./UsersTable.columns";
import { usersTableData } from "./UsersTable.data";

const UsersTable = () => {
  const [search, setSearch] = useState<string>();
  const [dataSource, setDataSource] = useState<UsersDataType[]>(usersTableData);
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([""]);
  const [form] = Form.useForm();

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
      <Space
        style={{
          width: "100%",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
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
      <EditableProTable
        columns={usersTableColumns}
        request={async () => ({
          data: usersTableData,
          total: usersTableData.length,
          success: true,
        })}
        value={dataSource.filter((el) =>
          el.name.toLocaleLowerCase().includes(search?.toLowerCase() ?? "")
        )}
        recordCreatorProps={false}
        pagination={{
          pageSize: 5,
        }}
        editable={{
          form,
          type: "multiple",
          editableKeys,
          onSave: async (rowKey, data, row) => {
            //TODO: Back service
          },
          onChange: setEditableRowKeys,
        }}
        rowKey={"id"}
      />
    </Card>
  );
};

export default UsersTable;
