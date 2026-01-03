import { BrowserRouter } from "react-router-dom";
//@ts-expect-error Иди нахуй еслинт
import { Story } from "@storybook/react-webpack5";

export const RouterDecorator = (story: () => Story) => {
  return <BrowserRouter>{story()}</BrowserRouter>;
};
