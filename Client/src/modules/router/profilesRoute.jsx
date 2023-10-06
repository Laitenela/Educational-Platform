import Profile from "../../components/pages/profile/profile";
import ProfileEditor from "../../components/pages/profileEditor/profileEditor";
import routeLoader from "../loaders/loaders";

const profileRoute = [
  {
    path: "me",
    element: <Profile />,
    loader: routeLoader.profile,
  },
  {
    path: "me/edit",
    element: <ProfileEditor />,
    loader: routeLoader.profileEditor,
  },
];

export default profileRoute;
