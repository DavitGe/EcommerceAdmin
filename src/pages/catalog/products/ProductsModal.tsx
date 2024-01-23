import { ModalFormProps } from "@ant-design/pro-components";
import EditModalForm from "../../../components/shared/editModal/EditModalForm";
import { useModal } from "../../../utils/context/IsModalOpenContext";
import { useModalData } from "./context/useModalData";

interface IProps extends ModalFormProps {}

const ProductsModal = (props: IProps) => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { setModalData } = useModalData();
  return (
    <EditModalForm
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
      modalProps={{
        afterClose: () => {
          setModalData({});
        },
      }}
      {...props}
    ></EditModalForm>
  );
};

export default ProductsModal;
