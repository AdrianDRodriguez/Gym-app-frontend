import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Hypertrophying</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/wod">WOD</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/exercises/new">New Exercise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">Signup</a>
              </li>
              <LogoutLink/>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}