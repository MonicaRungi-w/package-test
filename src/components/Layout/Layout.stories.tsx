import React from "react";
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
    { key: "1", label: "prova1", icon: "", children: [] },
    {
      key: "1",
      label: "prova2",
      icon: "",
      children: [
        { key: "11", label: "sub1", icon: "", children: [] },
        {
          key: "12",
          label: "sub2",
          icon: "",
          children: [{ key: "121", label: "sub21", icon: "", children: [] }],
        },
      ],
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

const LayoutTemplate: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <Header
      logoComponent={""}
      titleComponent={
        <div style={{ height: "80px", color: "white" }}>Header Template</div>
      }
      rightComponent={""}
    />
    <Content>
      <div>content template</div>
    </Content>
    <Footer>footer template</Footer>
  </Layout>
);

export const LayoutComponent = LayoutTemplate.bind({});
LayoutComponent.args = {};
