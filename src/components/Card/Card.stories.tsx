import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

export default {
  title: "ReactComponentLibrary/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  title: "Titolo di prova",
  caption: "Caption di prova molto molto lunga mooooooolto lunga addio",
};
