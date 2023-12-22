import { SearchOutlined } from "@ant-design/icons";
import { ProFormFieldProps, ProFormText } from "@ant-design/pro-components";

type FiltersEnumType = {
  search: (props?: ProFormFieldProps) => JSX.Element;
  // other properties...
};

export const filtersEnum: FiltersEnumType = {
  search: (props?: ProFormFieldProps) => (
    <ProFormText
      noStyle
      {...props}
      fieldProps={{
        prefix: <SearchOutlined style={{ color: "#9d9d9d" }} />,
        size: "large",
        placeholder: "",
        ...props?.fieldProps,
      }}
    />
  ),
};
