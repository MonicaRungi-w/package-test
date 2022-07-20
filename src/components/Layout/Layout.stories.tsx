import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default {
  title: "ReactComponentLibrary/Layout",
  component: Layout,
  subcomponents: { Header, Footer, Sidebar, Content },
} as ComponentMeta<typeof Layout>;

const HeaderTemplate: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const HeaderComponent = HeaderTemplate.bind({});
HeaderComponent.args = {
  logoComponent: <img src="" />,
  titleComponent: <div>Enter Title Here</div>,
  rightComponent: (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>RC1</div>
      <div>RC2</div>
    </div>
  ),
};

const FooterTemplate: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}>
    <div>footer template</div>
  </Footer>
);

export const FooterComponent = FooterTemplate.bind({});
FooterComponent.args = {};

const SidebarTemplate: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args}></Sidebar>
);

export const SidebarComponent = SidebarTemplate.bind({});
SidebarComponent.args = {
  collapsible: true,
  title: "THE APP",
  items: [
    {
      key: "1",
      label: "prova1",
      icon: "https://cdn0.iconfinder.com/data/icons/ikonate/48/placeholder-512.png",
      link: "",
    },
    {
      key: "1",
      label: "prova2",
      icon: "https://cdn0.iconfinder.com/data/icons/ikonate/48/placeholder-512.png",
      link: "",
    },
  ],
};

const ContentTemplate: ComponentStory<typeof Content> = (args) => (
  <Content {...args}>
    <div>content template</div>
  </Content>
);

export const ContentComponent = ContentTemplate.bind({});
ContentComponent.args = {};

const LayoutTemplate: ComponentStory<typeof Layout> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <Layout
      {...args}
      sidebarComponent={
        <Sidebar
          isOpen={open}
          setIsOpen={setOpen}
          collapsible
          title={"Bifrost"}
          iconTitle="https://cdn0.iconfinder.com/data/icons/ikonate/48/placeholder-512.png"
          items={[
            {
              key: "1",
              label: "prova1",
              icon: "https://cdn0.iconfinder.com/data/icons/ikonate/48/placeholder-512.png",
              link: "",
            },
            {
              key: "1",
              label: "prova2",
              icon: "https://cdn0.iconfinder.com/data/icons/ikonate/48/placeholder-512.png",
              link: "",
            },
          ]}
          footer={<>Biftost ©</>}
        />
      }
    >
      <Header
        logoComponent={""}
        titleComponent={
          <div style={{ height: "80px", color: "white" }}>Header Template</div>
        }
        rightComponent={""}
      />
      <Content>
        <div style={{ height: "200px" }}>content template</div>
      </Content>
      <Footer>footer template</Footer>
    </Layout>
  );
};

export const LayoutComponent = LayoutTemplate.bind({});
LayoutComponent.args = {};
