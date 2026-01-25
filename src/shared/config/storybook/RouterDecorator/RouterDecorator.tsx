import { BrowserRouter } from "react-router-dom";
import { Decorator } from "@storybook/react-webpack5";
import { StoreProvider } from "@/app/providers/StoreProvider";

export const RouterDecorator: Decorator = (StoryComponent) => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <StoryComponent />
      </BrowserRouter>
    </StoreProvider>
  );
};
