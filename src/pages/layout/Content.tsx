import { Layout } from "antd";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

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
    <Wrapper>
      <Routes>
        <Route path="dashboard" element={<div></div>} />
      </Routes>
    </Wrapper>
  );
};

export default Content;
