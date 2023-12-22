import { Card, CardProps, Flex, Typography, theme } from "antd";
import React, { Children } from "react";
import styled from "styled-components";
import AdProTable from "../dataEntry/AdProTable";
import { ProTableProps } from "@ant-design/pro-components";
import { Params } from "react-router-dom";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";

interface PropsI extends CardProps {
  title: string;
  icon: React.ReactNode;
  desc?: string;
  tableProps?: ProTableProps<any, Params, ValueType>;
  children?: React.ReactNode;
}

const RefferenceWrapper = (props: PropsI) => {
  const { token } = theme.useToken();

  return (
    <Card {...props} title={undefined}>
      <Flex gap={12} align={"center"}>
        <IconWrapper color={token.colorPrimary}>{props?.icon}</IconWrapper>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {props.title}
        </Typography.Title>
      </Flex>
      <p style={{ opacity: 0.6, margin: 0 }}>
        {props?.desc ?? "For editing doubleclick the row"}
      </p>
      {props?.tableProps ? (
        <AdProTable {...props.tableProps} />
      ) : (
        props?.children
      )}
    </Card>
  );
};

const IconWrapper = styled.div`
  font-size: 24px;
  color: ${(props) => props.color};
`;

export default RefferenceWrapper;
