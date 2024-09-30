import ListFriends from "./components/friends/ListFriends";
import Posts from "./components/post/Posts";
import Reels from "./components/reels/Reels";
import SeeMore from "./components/SeeMore";
import "./styles/App.scss";
import Login from "./view/auth/Login";
import Register from "./view/auth/Register";
import ErrorPage from "./view/errors/ErrorPage";
import HomeView from "./view/home/HomeView";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./view/profile/Profile";
import Stories from "./view/stories/StoriesPage";
import Friends from "./components/friends/Friends";
import FriendsRequest from "./components/friends/FriendsRequest";
import Suggestion from "./components/friends/Suggestion";
import RecentlyAdded from "./components/friends/RecentlyAdded";
import GroupJoined from "./components/groups/GroupJoined";
import GroupSuggestion from "./components/groups/GroupSuggestion";
import GroupActivity from "./components/groups/GroupActivity";
import CreateGroup from "./components/groups/CreateGroup";
import Groups from "./components/groups/Groups";
import LayoutAdmin from "./view/admin/Layout.admin";
import Dashboard from "./components/admin/Admin.dashboard";
import UsersPanel from "./components/admin/Admin.users";
import PostsPanel from "./components/admin/Admin.posts";
import GroupsPanel from "./components/admin/Admin.groups";
import GroupDetail from "./components/group_detail/GroupDetail";

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
          element: <ListFriends />,
          children: [
            {
              element: <Friends />,
              path: 'friends'
            },
            {
              element: <FriendsRequest />,
              path: 'friendsRequest'
            },
            {
              element: <Suggestion />,
              path: 'suggestion'
            },
            {
              element: <RecentlyAdded />,
              path: "recentlyAdded"
            }
          ]
        },
        {
          path: "groups",
          element: <Groups />,
          children: [
            {
              element: <GroupActivity />,
              path: "recentlyActivity"
            },
            {
              element: <GroupJoined />,
              path: 'joined'
            },
            {
              element: <GroupSuggestion />,
              path: 'suggestion'
            },
            
          ]
        },
        {
          path: "seemore",
          element: <SeeMore />
        },
        {
          path: '/profile',
          element: <Profile />
        },
      ]
    },
    
    {
      path: "reels",
      element: <Reels />
    },
    {
      path: "login",
      element: <Login />,
    },

    {
      path: "register",
      element: <Register />,
    },
    {
      path: '/stories',
      element: <Stories />
    },
    {
      path: '/groups/create',
      element: <CreateGroup />
    },
    {
      element: <GroupDetail/>,
      path: '/groups/groupName'
    },
    {
      path: '/admin',
      element: <LayoutAdmin />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: "users",
          element: <UsersPanel />
        },
        {
          path: "posts",
          element: <PostsPanel />
        },
        {
          path: "groups",
          element: <GroupsPanel />
        }
      ]
    }
    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
