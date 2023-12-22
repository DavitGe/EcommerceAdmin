import RefferenceWrapper from "../../../components/shared/refferenceWrapper/RefferenceWrapper";
import { SlidersOutlined } from "@ant-design/icons";
import { productColumns } from "./confs/product.columns";
import { productsData } from "./context/products.data";

const ProductsView = () => {
  return (
    <RefferenceWrapper
      title="Products"
      icon={<SlidersOutlined />}
      tableProps={{
        columns: productColumns,
        dataSource: productsData,
        pagination: false,
      }}
      desc="Streamline product management with our intuitive admin panel."
      // filters={{}}
    />
  );
};

export default ProductsView;
