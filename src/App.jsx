import axios from "axios";
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";
import { Header } from "./Header";
import { WelcomePage } from "./WelcomePage";
import { ExercisesPage } from "./ExercisesPage";
import { ExercisesNew } from "./ExercisesNew";
import { WodsNew } from "./WodsNew";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <WelcomePage/>,
      },
      {
        path: "/exercises",
        element: <ExercisesPage/>,
      },
      {
        path: "/exercises/new",
        element: <ExercisesNew/>,
      },
      {
        path: "/wods/new",
        element: <WodsNew/>,
      },
      {
        path: "/wods",
        element: <WodPage/>,
      },
      {
        path: "/signup",
        element: <SignupPage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;