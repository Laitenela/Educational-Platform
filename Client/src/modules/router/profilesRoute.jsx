import Profile from "../../components/pages/profile/profile";
import routeLoader from "../loaders/loaders";

const profileRoute = [
  {
    path: "me",
    element: <Profile mode='view' />,
    loader: routeLoader.profile,
  },
  {
    path: "me/edit",
    element: <Profile mode='edit' />,
    loader: routeLoader.profileEditor,
  },
];

export default profileRoute;
