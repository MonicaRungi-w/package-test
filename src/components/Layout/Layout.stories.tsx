import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Button from "../Button";

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
  navbarItems: [<div>RC1</div>, <div>RC2</div>],
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
      link: () => console.log("test"),
    },
    {
      key: "1",
      label: "prova2",
      icon: "https://cdn0.iconfinder.com/data/icons/ikonate/48/placeholder-512.png",
      link: () => console.log("test"),
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
              link: () => console.log("test"),
            },
            {
              key: "1",
              label: "prova2",
              icon: "https://cdn0.iconfinder.com/data/icons/ikonate/48/placeholder-512.png",
              link: () => console.log("test"),
            },
          ]}
          footer={<>Biftost ©</>}
        />
      }
      footerComponent={<Footer>footer template test</Footer>}
    >
      <Header
        logoComponent={
          <img
            src={
              "https://cdn0.iconfinder.com/data/icons/ikonate/48/placeholder-512.png"
            }
            style={{ width: "30px" }}
          />
        }
        titleComponent={"Header Template"}
        navbarItems={[
          <div key="example-key-1">Test1</div>,
          <div key="example-key-2">Test2</div>,
        ]}
      />
      <Content>
        <div>content template</div>
      </Content>
    </Layout>
  );
};

export const LayoutComponent = LayoutTemplate.bind({});
LayoutComponent.args = {};
