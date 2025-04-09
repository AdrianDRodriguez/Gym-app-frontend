import axios from "axios";
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";
import { Header } from "./Header";
import { ExercisesPage } from "./ExercisesPage";
import { ExercisesNew } from "./ExercisesNew";
import { WOD } from "./WOD";
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
        element: <ExercisesPage/>,
      },
      {
        path: "/exercises/new",
        element: <ExercisesNew/>,
      },
      {
        path: "/wod",
        element: <WOD/>,
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