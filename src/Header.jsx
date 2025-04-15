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
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">HyperBox</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/exercises">Exercises</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/exercises/new">Add an exercise</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Member Magement
                </a>
                <ul className="dropdown-menu">
                  {authenticationLinks}
                  {/* <li><a className="dropdown-item" href="/wods/new">Create a WOD</a></li> */}
                  <li><a className="dropdown-item" href="/wods">My WODs</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}