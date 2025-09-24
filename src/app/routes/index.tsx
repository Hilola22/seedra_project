import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("@/pages/home"))
const AboutPage = lazy(() => import("@/pages/about"));

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home/> },
        { path: "/about", element: <AboutPage/> },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
