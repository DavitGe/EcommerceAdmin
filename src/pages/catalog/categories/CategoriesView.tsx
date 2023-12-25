import RefferenceWrapper from "../../../components/shared/refferenceWrapper/RefferenceWrapper";
import { categoryColumns } from "./confs/categories.columns";
import categoryData from "./confs/category.data";

export interface ICategory {
  id?: number;
  icon?: React.ReactNode;
  name?: string;
  desc?: string;
  children?: ICategory[];
}

const CategoriesView = () => {
  return (
    <RefferenceWrapper
      title="Categories"
      icon={<></>}
      tableProps={{
        columns: categoryColumns,
        dataSource: categoryData,
        pagination: false,
      }}
      desc="Streamline categories management with our intuitive admin panel"
    />
  );
};

export default CategoriesView;
