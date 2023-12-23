import { TagOutlined } from "@ant-design/icons";
import RefferenceWrapper from "../../../components/shared/refferenceWrapper/RefferenceWrapper";
import { couponsColumns } from "./confs/coupons.columns";
import { couponsData } from "./confs/coupons.data";

export interface ICoupon {
  name?: string;
  code?: string;
  discount?: string;
  startDate?: string;
  endDate?: string;
  status?: boolean;
}
const AttributesView = () => {
  return (
    <RefferenceWrapper
      title="Coupons"
      icon={<TagOutlined />}
      tableProps={{
        columns: couponsColumns,
        pagination: false,
        dataSource: couponsData,
      }}
      desc="Create custom sale promocodes for your customers"
    />
  );
};

export default AttributesView;
