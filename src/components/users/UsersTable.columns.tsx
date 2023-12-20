import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ProColumns } from "@ant-design/pro-components";
import { Avatar, Input, Space, Tag, Typography } from "antd";

export interface UsersDataType {
  name: string;
  email: string;
  phone: string;
  address: string;
  id: number;
}

export const usersTableColumns: ProColumns<UsersDataType, "text">[] = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (_, row, index) => {
      return (
        <Space>
          <Avatar
            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
          />
          <Space size={0} direction={"vertical"}>
            <Typography.Title level={5} style={{ margin: 0 }}>
              {row?.name}
            </Typography.Title>
            <Typography.Text style={{ color: "#9d9d9d" }}>
              #{row?.id}
            </Typography.Text>
          </Space>
        </Space>
      );
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    sorter: (a, b) => a.phone.localeCompare(b.phone),
  },
  {
    title: "Address",
    dataIndex: "address",
    sorter: (a, b) => a.address.localeCompare(b.address),
    fieldProps: (form, { rowKey, rowIndex }) => {
      if (form.getFieldValue([rowKey || "", "title"]) === "不好玩") {
        return {
          disabled: true,
        };
      }
      if (rowIndex > 9) {
        return {
          disabled: true,
        };
      }
      return {};
    },
  },
  {
    title: "Actions",
    valueType: "option",
    render: (_, record, i, action) => (
      <Space>
        <Tag
          color="warning"
          icon={<EditOutlined />}
          style={{ cursor: "pointer", fontWeight: 500 }}
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          Edit
        </Tag>
        <Tag
          color="error"
          icon={<DeleteOutlined />}
          style={{ cursor: "pointer", fontWeight: 500 }}
        >
          Delete
        </Tag>
      </Space>
    ),
  },
];
