import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NoNav from "./NoNav";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    // 주소를 찾지 못하였을 때 또는 컴포넌트가 충돌하였을 때 표시
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <NoNav />,
    children: [
      {
        path: "nonav",
        element: <Home />,
      },
    ],
  },
]);

export default router;
