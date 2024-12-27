import { ConfigProvider } from "antd";

export const Config = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            activeBorderColor: "#000",
            hoverBorderColor: "#000",
            
            
          },
          Button: {},
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
