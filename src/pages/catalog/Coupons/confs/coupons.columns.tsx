import { ProColumns } from "@ant-design/pro-components";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { Col, Tag } from "antd";
import { filtersEnum } from "../../../../components/shared/refferenceWrapper/filtersEnum";
import { ICoupon } from "../CouponsView";

const SearchEl = filtersEnum.search;

export const couponsColumns: ProColumns<ICoupon, ValueType>[] = [
  {
    title: (
      <Col>
        <span>Campaign Name</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "name",
    sorter: (a, b) => a.name?.localeCompare(b.name ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Code</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "code",
    sorter: (a, b) => a.code?.localeCompare(b.code ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Discount</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "discount",
    sorter: (a, b) => a.discount?.localeCompare(b.discount ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Start Date</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "startDate",
    sorter: (a, b) => a.startDate?.localeCompare(b.startDate ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>End Date</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "endDate",
    sorter: (a, b) => a.endDate?.localeCompare(b.endDate ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Status</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "status",
    sorter: (a, b) => a.endDate?.localeCompare(b.endDate ?? "") ?? 0,
    render: (_, row) => (
      <Tag
        color={row?.status ? "success" : "error"}
        style={{
          fontWeight: 600,
        }}
      >
        {row?.status ? "ACTIVE" : "EXPIRED"}
      </Tag>
    ),
  },
];
