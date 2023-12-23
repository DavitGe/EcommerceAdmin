import { ProColumns } from "@ant-design/pro-components";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { Col } from "antd";
import { filtersEnum } from "../../../../components/shared/refferenceWrapper/filtersEnum";
import { EditOutlined } from "@ant-design/icons";
import { IAttribute } from "../AttributesView";

const SearchEl = filtersEnum.search;

export const attributesColumns: ProColumns<IAttribute, ValueType>[] = [
  {
    title: (
      <Col>
        <span>Name</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "name",
    sorter: (a, b) => a.name?.localeCompare(b.name ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Display Name</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "displayName",
    sorter: (a, b) => a.displayName?.localeCompare(b.displayName ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Option</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "option",
    sorter: (a, b) => a.option?.localeCompare(b.option ?? "") ?? 0,
  },
  {
    title: (
      <Col>
        <span>Values</span>
        <div style={{ width: "100%", height: 24 }} />
      </Col>
    ),
    dataIndex: "option",
    render: () => <EditOutlined style={{ cursor: "pointer" }} />,
    width: 72,
  },
];
