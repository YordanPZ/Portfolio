function Header() {
  return (
    <header className="header">
      <nav className="header nav-bar">
        <div className="header nav-bar__logo">
          <p>
            <span>©</span>Code by Yordani
          </p>
        </div>
        <div className="header nav-bar__links">
          <ul>
            <li>
              <a href="work" className="active">Work</a>
            </li>
            <li>
              <a href="about" className="active">About</a>
            </li>
            <li>
              <a href="contact" className="active">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="header__location">
        <p>Located in the heart of the city of Buenos Aires, Argentina</p>
        <img src="./worldwide.png" alt="worldwide" />
      </div>

      <img className="header__img" src="./Yordan.jpeg" alt="yordani"/>

      <div className="header__profesion">
        <div>
          <i className="bx bx-arrow-back"></i>
        </div>
        <p>
          Web Developer <hr className="hr" /> Scrum Master
        </p>
      </div>
      <div className="header__name">
        <h1>
          Yordani Jimenez<span>-</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
