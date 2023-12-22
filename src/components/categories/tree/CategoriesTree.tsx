import { Tree } from "antd";
import { categoriesList } from "../context/categories.list";

const CategoriesTree = () => {
  return <Tree treeData={categoriesList} />;
};

export default CategoriesTree;
