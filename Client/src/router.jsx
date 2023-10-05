import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Main from "./components/routes/main/main";
import Profile from "./components/routes/profile/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/my",
        element: <Profile/>
      }
    ]
  }
])

export default router;