import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NoNav from "./NoNav";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

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
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
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
