import { CompassOutlined } from "@ant-design/icons";
import RefferenceWrapper from "../../components/shared/refferenceWrapper/RefferenceWrapper";
import { orderColumns } from "./confs/orderColumns";
import { orderData } from "./confs/orderData";

export interface IOrder {
  id: number;
  InvoiceN?: string;
  orderTime?: string;
  customerName?: string;
  method?: "cash" | "card";
  amount?: number;
  status?: "cancel" | "delivered" | "pending";
}

const OrdersView = () => {
  return (
    <RefferenceWrapper
      title="Orders"
      icon={<CompassOutlined />}
      desc="Manage all order info here!"
      tableProps={{
        columns: orderColumns,
        pagination: false,
        dataSource: orderData,
      }}
    />
  );
};

export default OrdersView;
