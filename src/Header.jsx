import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

let authenticationLinks;

  if (localStorage.jwt) {
    authenticationLinks = (
      <div>
        <li><LogoutLink className="dropdown-item"/></li>
      </div>
    )
  } else {
    authenticationLinks = (
      <div>
        <li><Link className="dropdown-item" to="/login">Login</Link></li>
        <li><a className="dropdown-item" href="/signup">Sign up</a></li>
      </div>
    )
  }

export function Header() {
  return (
<header className="mb-auto py-3">
<div className="container text-center">
  <h3 className="fw-bold text-white mb-0">HYPERBOX</h3>
  <nav className="nav justify-content-center mt-2">
    <a className="nav-link px-3 text-white" href="/">Home</a>
    <a className="nav-link px-3 text-secondary" href="/exercises">Exercises</a>
    <a className="nav-link px-3 text-secondary" href="/exercises/new">Add an exercise</a>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Member Management
      </a>
      <ul class="dropdown-menu">
        {authenticationLinks}
        <li><a className="dropdown-item" href="wods">My WOD</a></li>
      </ul>
    </li>
  </nav>
</div>
</header>
  )
}
