export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container">
          <a className="navbar-brand text-white" href={"/"}>
            <h3>Learn API</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link text-white" aria-current="page" href="#">
                Home
              </a>

              <p className="nav-link mb-0 btn btn-light text-dark">Hi Igo</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
