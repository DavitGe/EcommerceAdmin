import { Col } from "antd";
import { filtersEnum } from "../../../../components/shared/refferenceWrapper/filtersEnum";
import { ICategory } from "../CategoriesView";
import { ProColumns } from "@ant-design/pro-components";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { Link } from "react-router-dom";

const SearchEl = filtersEnum.search;

export const categoryColumns: ProColumns<ICategory, ValueType>[] = [
  {
    title: (
      <Col>
        <span>Icon</span>
        <div style={{ width: "100%", height: 24 }} />
      </Col>
    ),
    dataIndex: "icon",
    width: 72,
  },
  {
    title: (
      <Col>
        <span>Name</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "name",
    sorter: (a, b) => a.name?.localeCompare(b.name ?? "") ?? 0,
    render: (text, row) => {
      return <Link to={row.id?.toString() ?? ""}>{text}</Link>;
    },
  },
  {
    title: (
      <Col>
        <span>Desc</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "desc",
    sorter: (a, b) => a.name?.localeCompare(b.name ?? "") ?? 0,
  },
];
