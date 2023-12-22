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
      scroll={{
        x: "max-width",
        y: "70vh",
      }}
    />
  );
};

export default AdProTable;
