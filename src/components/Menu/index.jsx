import "./style.css";
import { NavLink } from "react-router-dom";

const LinksMenu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Sobre",
    href: "/sobre",
  },
  {
    title: "Portfólio",
    href: "/portfolio",
  },
  {
    title: "Contato",
    href: "/contato",
  },
];

function Menu() {
  return (
    <header className="menu container">
      <div className="menu-flex">
        <div className="logo">
          <p>V</p>
        </div>
        <nav>
          <ul className="nav-menu">
            {LinksMenu.map((link, index) => (
              <li key={index} className="nav-item ">
                <NavLink to={link.href} className="link" active="active">
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="logo">
          <p>V</p>
        </div>
      </div>
    </header>
  );
}

export default Menu;
