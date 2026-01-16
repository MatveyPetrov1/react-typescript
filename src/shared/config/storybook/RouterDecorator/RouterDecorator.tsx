import { BrowserRouter } from "react-router-dom";
//@ts-expect-error Иди нахуй еслинт
import { Story } from "@storybook/react-webpack5";
import { StoreProvider } from "@/app/providers/StoreProvider";

export const RouterDecorator = (story: () => Story) => {
  return (
    <StoreProvider>
      <BrowserRouter>{story()}</BrowserRouter>
    </StoreProvider>
  );
};
