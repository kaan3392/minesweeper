import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context";
import Board from "./components/Board/Board";
import Game from "./components/Game/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />,
  },
  {
    path: "game",
    element: <Game />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
