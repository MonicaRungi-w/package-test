import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pagination from "./Pagination";

export default {
  title: "ReactComponentLibrary/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [data, setData] = useState([]);
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const renderData = (data: any) => {
    return (
      <ul style={{height: "200px"}}>
        {data.map((d: any, index: number) => {
          return <li key={index}>{d.title}</li>;
        })}
      </ul>
    );
  };

  return (
    <>
      {renderData(currentItems)}
      <Pagination {...args} data={data} setCurrent={setCurrentItems} />
    </>
  );
};

export const PaginationComponent = Template.bind({});
PaginationComponent.args = {
  pageNumberLimit: 5,
  itemsPerPage: 10
};
