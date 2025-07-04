import axios from "axios";
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";
import { Header } from "./Header";
import { WelcomePage } from "./WelcomePage";
import { ExercisesPage } from "./ExercisesPage";
import { ExercisesNew } from "./ExercisesNew";
import { WodsPage } from "./WodsPage";
// import { WodsNew } from "./WodsNew";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "https://gym-fitness-api-etx0.onrender.com";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div className="d-flex flex-column min-vh-100">
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
        path: "/wods",
        element: <WodsPage/>,
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