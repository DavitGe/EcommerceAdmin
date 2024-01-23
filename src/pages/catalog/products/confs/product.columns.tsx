import { ProColumns } from "@ant-design/pro-components";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { productInterface } from "../context/products.data";
import { Avatar, Col, Flex, Rate, Space, Tag, Typography } from "antd";
import { filtersEnum } from "../../../../components/shared/refferenceWrapper/filtersEnum";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons/lib/icons";
import { useModal } from "../../../../utils/context/IsModalOpenContext";

const SearchEl = filtersEnum.search;

export const productColumns: ProColumns<productInterface, ValueType>[] = [
  {
    title: (
      <Col>
        <span>Name</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "name",
    sorter: (a, b) => a.name?.localeCompare(b.name ?? "") ?? 0,
    render: (_, row, index) => {
      return (
        <Space align="start">
          <Avatar
            shape="square"
            size={36}
            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
          />
          <Flex gap={0} style={{ flexDirection: "column", marginTop: "-2px" }}>
            <Typography.Title level={5} style={{ margin: 0 }}>
              {row?.name}
            </Typography.Title>
            <Rate
              allowHalf
              value={row?.stars}
              disabled
              style={{ fontSize: 12, rowGap: 0 }}
            />
          </Flex>
        </Space>
      );
    },
    width: 312,
  },
  {
    title: (
      <Col>
        <span>Category</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "category",
    sorter: (a, b) => a.category?.localeCompare(b.category ?? "") ?? 0,
    width: 124,
  },
  {
    title: (
      <Col>
        <span>Price</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "price",
    renderText: (text) => `$${text.toFixed(2)}`,
    sorter: (a, b) => (a?.price ? a.price - (b?.price ?? 0) : -1),
    width: 64,
  },
  {
    title: (
      <Col>
        <span>Sale</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "sale",
    renderText: (text) => `-${text.toFixed(2)}%`,
    sorter: (a, b) => (a?.sale ? a.sale - (b?.sale ?? 0) : -1),
    width: 82,
  },
  {
    title: (
      <Col>
        <span>Status</span>
        <SearchEl fieldProps={{ size: "small" }} />
      </Col>
    ),
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status !== undefined && (
          <Tag
            color={status > 10 ? "success" : status === 0 ? "error" : "warning"}
            style={{
              fontWeight: 600,
            }}
            // bordered={false}
          >
            {status > 10 ? "INSTOCK" : status === 0 ? "OUTOFSTOCK" : "LOWSTOCK"}
          </Tag>
        )}
      </>
    ),
    sorter: (a, b) => (a?.status ? a.status - (b?.status ?? 0) : -1),
    width: 124,
    //TODO: Should be changed to Quantity
  },
  {
    title: (
      <Col>
        <span>Actions</span>
        <div style={{ width: "100%", height: 24 }} />
      </Col>
    ),
    valueType: "option",
    render: () => {
      const { setIsModalOpen } = useModal();

      function openModal() {
        setIsModalOpen(true);
      }

      return (
        <Space>
          <Tag
            color="warning"
            icon={<EditOutlined />}
            style={{ cursor: "pointer", fontWeight: 500 }}
            key="editable"
            onClick={openModal}
          >
            Edit
          </Tag>
          <Tag
            color="error"
            icon={<DeleteOutlined />}
            style={{ cursor: "pointer", fontWeight: 500 }}
            key="delete"
          >
            Delete
          </Tag>
        </Space>
      );
    },
    width: 124,
  },
];
