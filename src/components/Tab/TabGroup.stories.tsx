import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TabGroup from "./TabGroup";

export default {
  title: "ReactComponentLibrary/TabGroup",
  component: TabGroup,
} as ComponentMeta<typeof TabGroup>;

const Template: ComponentStory<typeof TabGroup> = (args) => {
  return <TabGroup {...args} />;
};

export const TabGroupComponent = Template.bind({});
TabGroupComponent.args = {
  panels: [
    { id: "tab1", title: "Tab 1", content: <div>PROVA</div> },
    { id: "tab2", title: "Tab 2", content: <div>PROVA 2 aaaaaaaaa</div> },
    {
      id: "tab3",
      title: "Tab 3",
      content: (
        <div>
          PROVA 3 <input />
          <button>SUBMIT</button>
          <div>CIAOOOOOOOOOOOOOOOOOOOOOOOOOO</div>
        </div>
      ),
    },
    { id: "tab4", title: "Tab 4", content: <div>PROVA 4</div> },
    { id: "tab5", title: "Tab 5", content: <div>PROVA 5</div> },
    { id: "tab6", title: "Tab 6", content: <div>PROVA 6</div> },
    { id: "tab7", title: "Tab 7", content: <div>PROVA 7</div> },
  ],
};
