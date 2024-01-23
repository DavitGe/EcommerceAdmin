import { ModalForm, ModalFormProps } from "@ant-design/pro-components";

interface IProps extends ModalFormProps {}

const EditModalForm = (props: IProps) => {
  return (
    <ModalForm
      {...props}
      modalProps={{
        destroyOnClose: true,
        ...props?.modalProps,
      }}
    ></ModalForm>
  );
};

export default EditModalForm;
