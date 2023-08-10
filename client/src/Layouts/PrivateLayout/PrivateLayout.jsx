/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Navigate, Outlet, Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../Contexts/ContextProvider";
import { Button, Layout, Menu, theme } from "antd";
import {
  DashboardOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  BookOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  BorderlessTableOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import logo from "../../assets/logo.png";
const { Header, Sider, Content } = Layout;

const PrivateLayout = () => {
  const { user, token } = useStateContext();
  const navigate = useNavigate();
  if (!token || user.role !== "Admin") {
    return <Navigate to="/" />;
  }
  const [selectedKey, setSelectedKey] = useState(() => {
    const storedKey = localStorage.getItem("selectedKey");
    return storedKey || "1";
  });

  useEffect(() => {
    localStorage.setItem("selectedKey", selectedKey);
  }, [selectedKey]);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="" width="90%" style={{ margin: "25px 0 " }} />
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onSelect={(item) => setSelectedKey(item.key)}
          items={[
            // {
            //   key: "1",
            //   icon: <DashboardOutlined />,
            //   label: <Link to="/admin/dashboard">Dashboard</Link>,
            // },
            {
              key: "2",
              icon: <UserOutlined />,
              label: <Link to="admin/user">User</Link>,
            },
            {
              key: "3",
              icon: <DesktopOutlined />,
              label: <Link to="admin/movie">Movie</Link>,
            },
            {
              key: "4",
              icon: <VideoCameraOutlined />,
              label: <Link to="admin/screenings">Screenings</Link>,
            },
            {
              key: "5",
              icon: <SnippetsOutlined />,
              label: <Link to="admin/orders">Order</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div
            style={{
              width: "95%",
              textAlign: "end",
            }}
          >
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              <LogoutOutlined />
              Log out
            </Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
