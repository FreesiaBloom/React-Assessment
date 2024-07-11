function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white main-nav py-3">
      <div className="container">
        <a href="#" className="navbar-brand text-black">
          <h2 className="display-5">MyApp</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">User</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Admin Dashboard</a>
            </li>
          </ul>
          <div className="navbar-actions">
            <a href="#" className="btn btn-black-outline ml-5 mr-2 hvr-grow">Login</a>
            <a href="#" className="btn btn-black-outline ml-5 mr-2 hvr-grow">Log out</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
