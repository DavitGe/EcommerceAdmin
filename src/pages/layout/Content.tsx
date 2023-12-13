import { Layout } from "antd";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import DashboardView from "../dashboard/DashboardView";

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
      </Routes>
    </Wrapper>
  );
};

export default Content;
