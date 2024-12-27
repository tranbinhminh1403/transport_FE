import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { items } from "../menu/sideMenuItems";
import Title from "antd/es/typography/Title";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { resetFilter } from "../../store/slice/filterSlice";
import { resetData } from "../../store/slice/dataSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { menuKey } from "../../store/selectors/menuSelector";
import { changeMenu } from "../../store/slice/menuSlice";

const { Content, Sider } = Layout;

export const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentKey = useSelector(menuKey);

  const handleMenuClick = (key: string) => {
    dispatch(resetFilter());
    dispatch(resetData());
    dispatch(changeMenu(key));
    navigate(`/management/${key}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        trigger={null}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={[currentKey]}
          selectedKeys={[currentKey]}
          mode="inline"
          items={items}
          onClick={({ key }) => handleMenuClick(key)}
        />
      </Sider>

      <Layout>
        <Content style={{ margin: "0 3%" }}>
          <Title level={4}>Quản lý kho</Title>
          <div className="content">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}; 