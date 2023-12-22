import { ReactElement } from "react";
import styled from "styled-components";
import { theme } from "antd";

const SelectorList = ({
  elements,
  withoutHover = false,
}: {
  elements: ReactElement[];
  withoutHover?: boolean;
}) => {
  const { token } = theme.useToken();

  return (
    <Wrapper>
      {elements.map((el) => {
        return (
          <Option color={withoutHover ? "transparent" : token.colorBgBase}>
            {el}
          </Option>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.div<{ color: string }>`
  width: 100%;
  height: 24px;
  transition: 0.2s ease;
  border-radius: 6px;
  padding: 4px 8px;
  &:hover {
    background-color: ${(props) => props.color ?? "#9d9d9d"};
  }
`;

export default SelectorList;
