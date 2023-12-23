import { FilterOutlined } from "@ant-design/icons";
import RefferenceWrapper from "../../../components/shared/refferenceWrapper/RefferenceWrapper";
import { attributesColumns } from "./confs/attributes.columns";
import { attributesData } from "./confs/attributes.tempdata";

export interface IAttribute {
  name?: string;
  displayName?: string;
  option?: string;
}
const AttributesView = () => {
  return (
    <RefferenceWrapper
      title="Attributes"
      icon={<FilterOutlined />}
      tableProps={{
        columns: attributesColumns,
        pagination: false,
        dataSource: attributesData,
      }}
      desc="Create custom attributes for your products"
    />
  );
};

export default AttributesView;
