import ListFriends from "./components/ListFriends";
import ListGroups from "./components/ListGroup";
import Posts from "./components/Posts";
import Reels from "./components/Reels";
import SeeMore from "./components/SeeMore";
import "./styles/App.scss";
import Login from "./view/auth/Login";
import Register from "./view/auth/Register";
import ErrorPage from "./view/errors/ErrorPage";
import HomeView from "./view/home/HomeView";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Posts />
        },
        {
          path: "listFriends",
          element: <ListFriends />
        },
        {
          path: "reels",
          element: <Reels />
        },
        {
          path: "listGroup",
          element: <ListGroups />
        },
        {
          path: "seemore",
          element: <SeeMore />
        }

      ]
    },
    {
      path: "login",
      element: <Login />,
    },

    {
      path: "register",
      element: <Register />,
    },
    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
