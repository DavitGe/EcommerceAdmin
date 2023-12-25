import { ProColumns } from "@ant-design/pro-components";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { Col, Tag } from "antd";
import { IOrder } from "../OrdersView";
import { filtersEnum } from "../../../components/shared/refferenceWrapper/filtersEnum";

const SearchEl = filtersEnum.search;

export const orderColumns: ProColumns<IOrder, ValueType>[] = [
  {
    title: (
      <Col>
        <span>Invoice No</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "InvoiceN",
    sorter: (a, b) => a.InvoiceN?.localeCompare(b.InvoiceN ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Order Time</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "orderTime",
    sorter: (a, b) => a.orderTime?.localeCompare(b.orderTime ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Customer Name</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "customerName",
    sorter: (a, b) => a.customerName?.localeCompare(b.customerName ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Method</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "method",
    sorter: (a, b) => a.method?.localeCompare(b.method ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Amount</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "amount",
    renderText: (text) => `$${text.toFixed(2)}`,
    sorter: (a, b) => (a?.amount ? a.amount - (b?.amount ?? 0) : -1),
  },
  {
    title: (
      <Col>
        <span>Status</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status !== undefined && (
          <Tag
            color={
              status === "delivered"
                ? "success"
                : status === "cancel"
                ? "error"
                : "warning"
            }
            style={{
              fontWeight: 600,
            }}
            // bordered={false}
          >
            {status.toUpperCase()}
          </Tag>
        )}
      </>
    ),
    sorter: (a, b) => a.status?.localeCompare(b.status ?? "") ?? 0,

    //TODO: Should be changed to Quantity
  },
];
