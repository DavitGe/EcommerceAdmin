import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ProColumns } from "@ant-design/pro-components";
import { Avatar, Col, Space, Tag, Typography } from "antd";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { filtersEnum } from "../../../components/shared/refferenceWrapper/filtersEnum";

export interface UsersDataType {
  name: string;
  email: string;
  phone: string;
  address: string;
  id: number;
}

const SearchEl = filtersEnum.search;

export const usersTableColumns: ProColumns<UsersDataType, ValueType>[] = [
  {
    title: (
      <Col>
        <span>Name</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
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
    title: (
      <Col>
        <span>Email</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: (
      <Col>
        <span>Phone</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "phone",
    sorter: (a, b) => a.phone.localeCompare(b.phone),
  },
  {
    title: (
      <Col>
        <span>Address</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "address",
    sorter: (a, b) => a.address.localeCompare(b.address),
  },
  {
    title: (
      <Col>
        <span>Actions</span>
        <div style={{ width: "100%", height: 24 }} />
      </Col>
    ),
    valueType: "option",
    render: (_, record, __, action) => (
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
    // width: 64,
  },
];
