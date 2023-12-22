import { Layout } from "antd";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import DashboardView from "../dashboard/DashboardView";
import UsersView from "../users/UsersView";
import ProductsView from "../catalog/products/ProductsView";
import CategoriesView from "../catalog/categories/CategoriesView";

const { Content: Wrapper } = Layout;
const Content = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /dashboard when the path is empty
    if (location.pathname === "/") {
      navigate("/Dashboard");
    }
  }, []);

  return (
    <Wrapper style={{ paddingTop: 32 }}>
      <Routes>
        <Route path="Dashboard" element={<DashboardView />} />
        <Route path="Staff" element={<UsersView />} />
        <Route path="Catalog/Products" element={<ProductsView />} />
        <Route path="Catalog/Categories" element={<CategoriesView />} />
      </Routes>
    </Wrapper>
  );
};

export default Content;
