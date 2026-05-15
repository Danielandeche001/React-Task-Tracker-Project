function Navbar() {
  return (
    <nav className="navbar">
      <a className="nav-brand" href="#top">
        <span>G5</span>
        Task Tracker
      </a>

      <div className="nav-links">
        <a href="#add-task">Add Task</a>
        <a href="#tasks">Tasks</a>
      </div>
    </nav>
  );
}

export default Navbar;
