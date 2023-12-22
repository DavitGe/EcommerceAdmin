import { ProColumns } from "@ant-design/pro-components";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { productInterface } from "../context/products.data";
import { Avatar, Flex, Rate, Space, Tag, Typography } from "antd";

export const productColumns: ProColumns<productInterface, ValueType>[] = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: (a, b) => (a?.id ? a.id - (b?.id ?? 0) : -1),
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name?.localeCompare(b.name ?? "") ?? 0,
    render: (_, row, index) => {
      return (
        <Space align="start">
          <Avatar
            shape="square"
            size={36}
            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
          />
          <Flex gap={0} style={{ flexDirection: "column", marginTop: "-2px" }}>
            <Typography.Title level={5} style={{ margin: 0 }}>
              {row?.name}
            </Typography.Title>
            <Rate
              allowHalf
              value={row?.stars}
              disabled
              style={{ fontSize: 12, rowGap: 0 }}
            />
          </Flex>
        </Space>
      );
    },
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category?.localeCompare(b.category ?? "") ?? 0,
  },
  {
    title: "Price",
    dataIndex: "price",
    renderText: (text) => `$${text.toFixed(2)}`,
    sorter: (a, b) => (a?.price ? a.price - (b?.price ?? 0) : -1),
  },
  {
    title: "Sale",
    dataIndex: "sale",
    renderText: (text) => `-${text.toFixed(2)}%`,
    sorter: (a, b) => (a?.sale ? a.sale - (b?.sale ?? 0) : -1),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status !== undefined && (
          <Tag
            color={status > 10 ? "success" : status === 0 ? "error" : "warning"}
            style={{
              fontWeight: 600,
            }}
            // bordered={false}
          >
            {status > 10 ? "INSTOCK" : status === 0 ? "OUTOFSTOCK" : "LOWSTOCK"}
          </Tag>
        )}
      </>
    ),
    sorter: (a, b) => (a?.status ? a.status - (b?.status ?? 0) : -1),
    //TODO: Should be changed to Quantity
  },
];
