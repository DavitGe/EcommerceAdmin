import { DownloadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Popover, theme } from "antd";

interface IProps {
  exportExcel: () => void;
}

const ExportBtn = ({ exportExcel }: IProps) => {
  const { token } = theme.useToken();

  return (
    <Popover>
      <ExportWrapper
        onClick={exportExcel}
        color={token.colorIconHover}
        hoverColor={token.colorIcon}
        hoverBgColor={token.colorBgTextHover}
      >
        <DownloadOutlined style={{ fontSize: 18 }} />
      </ExportWrapper>
    </Popover>
  );
};

const ExportWrapper = styled.div<{
  color: string;
  hoverColor: string;
  hoverBgColor: string;
}>`
  height: 40px;
  width: 40px;
  border-radius: 100%;

  color: ${(props) => props.hoverColor};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.color};
    background-color: ${(props) => props.hoverBgColor};
  }
`;

export default ExportBtn;
