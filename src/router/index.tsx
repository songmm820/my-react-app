import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/Home";
import LazyRoute from "~/router/LazyRoute";
import type { TypedRouteObject } from "~/types/route";

const routes: TypedRouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/user/:userId",
    element: <div>Contact</div>,
  },
  {
    path: "*",
    element: (
      <LazyRoute
        title="404"
        isRequiredAuth={false}
        lazyChildren={lazy(() => import("~/pages/404"))}
      />
    ),
  },
];

export const router = createBrowserRouter(routes);
