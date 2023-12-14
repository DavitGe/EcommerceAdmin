import { ProTable, ProTableProps } from "@ant-design/pro-components";
import { Params } from "react-router-dom";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";

const AdProTable = (props: ProTableProps<any, Params, ValueType>) => {
  return (
    <ProTable
      toolBarRender={false}
      tooltip={false}
      {...props}
      form={{
        ...props?.form,
        style: {
          display: "none",
          ...props?.form?.style,
        },
      }}
      pagination={{
        pageSize: 5,
        ...props?.pagination,
      }}
      scroll={{
        x: "max-width",
      }}
    />
  );
};

export default AdProTable;
