import axios from "axios";
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ExercisesPage } from "./ExercisesPage";
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