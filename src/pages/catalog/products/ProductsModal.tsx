import {
  ModalFormProps,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import EditModalForm from "../../../components/shared/editModal/EditModalForm";
import { useModal } from "../../../utils/context/IsModalOpenContext";
import { useModalData } from "./context/useModalData";
import { Flex, Space, UploadProps, theme } from "antd";
import Dragger from "antd/es/upload/Dragger";
import styled from "styled-components";
import { InboxOutlined } from "@ant-design/icons/lib/icons";

interface IProps extends ModalFormProps {}

const ProductsModal = (props: IProps) => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const { setModalData } = useModalData();
  const { token } = theme.useToken();

  const draggerProps: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        // message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        // message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <EditModalForm
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
      title="Product add/edit"
      width={1024}
      modalProps={{
        afterClose: () => {
          setModalData({});
        },
      }}
      {...props}
    >
      <Space size={32}>
        <Dragger {...draggerProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
        <div>
          <ProFormText label="Name" />
          <ProFormSelect label="Category" />
          <Flex justify={"space-between"} gap={24} style={{ width: "100%" }}>
            <ProFormDigit
              label="Price"
              placeholder={"0"}
              addonAfter={
                <>
                  <PriceInputIcon color={token.colorSuccess}>
                    <span>$</span>
                  </PriceInputIcon>
                  <CurrencyWrapper>
                    <ProFormSelect
                      width={72}
                      initialValue={1}
                      placeholder={""}
                      options={[
                        {
                          label: "USD",
                          value: 1,
                        },
                      ]}
                      fieldProps={{
                        size: "small",
                        defaultValue: "USD",
                        style: {
                          height: 32,
                        },
                      }}
                    />
                  </CurrencyWrapper>
                </>
              }
              fieldProps={{
                style: {
                  paddingLeft: 24,
                  paddingRight: 32,
                },
              }}
            />
            <ProFormDigit
              label="Discount"
              placeholder={"0"}
              addonAfter={
                <>
                  <PriceInputIcon color={token.colorError}>
                    <span>$</span>
                  </PriceInputIcon>
                  <CurrencyWrapper>
                    <ProFormSelect
                      width={72}
                      initialValue={1}
                      placeholder={""}
                      options={[
                        {
                          label: "USD",
                          value: 1,
                        },
                      ]}
                      fieldProps={{
                        size: "small",
                        defaultValue: "USD",
                        style: {
                          height: 32,
                        },
                      }}
                    />
                  </CurrencyWrapper>
                </>
              }
              fieldProps={{
                style: {
                  paddingLeft: 24,
                  paddingRight: 32,
                },
              }}
            />
          </Flex>
          <ProFormDigit label="Count" placeholder={""} />
        </div>
      </Space>
    </EditModalForm>
  );
};

const PriceInputIcon = styled.div<{ color: string }>`
  position: absolute;
  height: 26px;
  width: 26px;
  background: ${(props) => props.color};
  top: 3px;
  left: 3px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CurrencyWrapper = styled.div`
  position: absolute;

  top: 0;
  right: 0;
`;

export default ProductsModal;
