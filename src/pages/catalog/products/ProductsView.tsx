import RefferenceWrapper from "../../../components/shared/refferenceWrapper/RefferenceWrapper";
import { SlidersOutlined } from "@ant-design/icons";
import { productColumns } from "./confs/product.columns";
import { productsData } from "./context/products.data";
import ProductsModal from "./ProductsModal";
import { ModalProvider } from "../../../utils/context/IsModalOpenContext";
import { ModalDataProvider, useModalData } from "./context/useModalData";

const MainProductsView = () => {
  const { modalData } = useModalData();

  return (
    <ModalProvider>
      <ProductsModal initialValues={modalData} />
      <RefferenceWrapper
        title="Products"
        icon={<SlidersOutlined />}
        tableProps={{
          columns: productColumns,
          dataSource: productsData,
          pagination: false,
        }}
        desc="Streamline product management with our intuitive admin panel."
      />
    </ModalProvider>
  );
};

//to use modalDataProiveder here
const ProductsView = () => (
  <ModalDataProvider>
    <MainProductsView />
  </ModalDataProvider>
);

export default ProductsView;
