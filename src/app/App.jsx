import React from "react";

import { BrowserRouter as RouterProvider } from "react-router-dom";
import { AppComponent } from "./app.component";

const App = () => (
  <RouterProvider>
    <AppComponent />
  </RouterProvider>
);

export default App;
