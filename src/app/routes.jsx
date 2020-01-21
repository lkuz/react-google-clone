import React from "react";
import { Search } from "../pages";

export const routes = [
  {
    href: "/",
    exact: true,
    component: Search
  },
  {
    href: "/test",
    component: () => <>Test</>
  }
];
