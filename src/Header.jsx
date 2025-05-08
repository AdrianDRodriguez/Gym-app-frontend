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
    <header className="navbar navbar-dark bg-dark fixed-top top-0 w-100 px-4">
      <span className="navbar-brand">HYPERBOX</span>
      <nav>
        <a href="/" className="text-white me-3 fw-bold">Home</a>
        <a href="/wods" className="text-muted me-3">Features</a>
        <ul>
          {authenticationLinks}
          <a href="/signup" className="text-muted">Signup</a>
          <a href="/login" className="text-muted">Login</a>
        </ul>
      </nav>
    </header>
  )
}