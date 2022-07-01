import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Fab from "./Fab";

export default {
  title: "ReactComponentLibrary/Fab",
  component: Fab,
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => {
  return <Fab {...args} />;
};

export const FabComponent = Template.bind({});
FabComponent.args = {
  actions: [
    {
      label: "About",
      icon: "https://www.svgrepo.com/show/422055/about.svg",
      onClick: () => console.log("About test"),
    },
    {
      label: "Profile",
      icon: "https://www.svgrepo.com/show/9177/nerd.svg",
      onClick: () => console.log("Profile test"),
    },
    {
      label: "Picture",
      icon: "https://www.svgrepo.com/show/145310/music.svg",
      onClick: () => console.log("Picture test"),
    },
    {
      label: "Trash",
      icon: "https://www.svgrepo.com/show/196981/trash.svg",
      onClick: () => console.log("Trash test"),
    },
  ],
};
