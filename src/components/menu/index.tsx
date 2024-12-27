import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { items } from "./sideMenuItems";
import Title from "antd/es/typography/Title";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeMenu } from "../../store/slice/menuSlice";
import { MenuInfo } from "rc-menu/lib/interface";
import { resetFilter } from "../../store/slice/filterSlice";
import { resetData } from "../../store/slice/dataSlice";

const { Content, Sider } = Layout;

export default function SideMenu({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useAppDispatch();

  const handleMenuClick = (e: MenuInfo) => {
    dispatch(changeMenu(e.key));
    dispatch(resetFilter());
    dispatch(resetData());
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
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(e) => handleMenuClick(e)}
        />
      </Sider>

      <Layout>
        <Content style={{ margin: "0 3%" }}>
          <Title level={4}>Quản lý kho</Title>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
