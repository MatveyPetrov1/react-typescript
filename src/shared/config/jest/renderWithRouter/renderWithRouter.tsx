import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
//@ts-expect-error 123
import { DeepPartial } from "@reduxjs/toolkit";

export interface renderWithRouterOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function renderWithRouter(
  component: React.ReactNode,
  options: renderWithRouterOptions = {}
) {
  const { route = "/", initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>{component}</StoreProvider>
    </MemoryRouter>
  );
}
