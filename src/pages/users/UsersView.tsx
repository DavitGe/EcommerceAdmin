import { UserOutlined } from "@ant-design/icons";
import RefferenceWrapper from "../../components/shared/refferenceWrapper/RefferenceWrapper";
import { usersTableColumns } from "./conf/UsersTable.columns";
import { usersTableData } from "./conf/UsersTable.data";

const DashboardTable = () => {
  return (
    <RefferenceWrapper
      title="Staff"
      desc="Manage your staff on intuitive level here"
      icon={<UserOutlined />}
      tableProps={{
        columns: usersTableColumns,
        dataSource: usersTableData,
        pagination: false,
      }}
    />
  );
};

export default DashboardTable;
