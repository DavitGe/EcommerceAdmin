import { ProColumns } from "@ant-design/pro-components";
import { Tag } from "antd";

export const recentSalesColumns: ProColumns<any, any>[] = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    width: "25%",
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.localeCompare(b.category),
    width: "25%",
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (_, row) => `$${row?.price.toFixed(2)}`,
    sorter: (a, b) => a.price - b.price,
    width: "25%",
  },
  {
    title: "Status",
    dataIndex: "inStock",
    render: (_, { inStock }) => (
      <Tag
        color={inStock > 10 ? "success" : inStock === 0 ? "error" : "warning"}
        style={{
          fontWeight: 600,
        }}
        // bordered={false}
      >
        {inStock > 10 ? "INSTOCK" : inStock === 0 ? "OUTOFSTOCK" : "LOWSTOCK"}
      </Tag>
    ),
    width: "25%",
    sorter: (a, b) => a.inStock - b.inStock,
  },
];
