import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, NavItem, NavLink } from "react-bootstrap";
import { BagFill, PersonCircle } from "react-bootstrap-icons";
import useStore from "../../store";
import { Link } from "react-router-dom";
import Logo from "../../asset/logo.svg";

const NavigationBar = ({ handleLogout, authenticatedUser }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const basketItems = useStore((store) => store.basketItems);

  const arrayWithQnt = basketItems.map((item) => item.qnt);
  console.log(`arrayWithQnt:`, arrayWithQnt);

  const quantityInCart = arrayWithQnt.reduce(
    (accumulator, currentItem) => accumulator + currentItem,
    0
  );

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownClose = (eventKey) => {
    setShowDropdown(false);
  };
  
  return (
    <header id="top-of-the-page" className="top-bar">
      <main>
        <nav className="header__nav">
          <Navbar
            className="navbar navbar-expand-lg navbar-dark bg-transparent px-0"
            expand="lg"
          >
            <Navbar.Brand href="/" className="text-white logo-text">
              <img src={Logo} alt="" className="logo-img" />
              Java.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="da-navbarNav" />
            <Navbar.Collapse id="da-navbarNav">
              <Nav className="navbar-nav ml-auto text-uppercase">
                <NavItem>
                  <NavLink href="/" className="nav-link smooth-scroll">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#services" className="nav-link smooth-scroll">
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavDropdown
                    title="Order Now"
                    id="dropdown-basic"
                    show={showDropdown}
                    onToggle={handleDropdownToggle}
                    onSelect={handleDropdownClose}
                  >
                    <div
                      className={`dropdown-menu ${showDropdown ? "show" : ""}`}
                    >
                      <NavDropdown.Item>
                        <Link to="/order">Looking Food</Link>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/order/coffee">Coffee</Link>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/order/food">Food</Link>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/order/frostino">Frostino</Link>{" "}
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/order/pastries">Pastries</Link>{" "}
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                </NavItem>
                <NavItem>
                  <NavLink href="/course" className="nav-link smooth-scroll">
                    Courses
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contactus" className="nav-link smooth-scroll">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
              <div className="login-cert-container">
                <ul className="login-cert">
                  <NavItem>
                    <NavLink href="/login">
                      <i>
                        <PersonCircle color="white" />
                      </i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Link className="login_register" to="/cart">
                      <i>
                        <BagFill color="white" />
                      </i>{" "}
                      <button className="badge">{quantityInCart}</button>
                    </Link>{" "}
                  </NavItem>
                </ul>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </main>

      <div class="container home-container">
        <div class="home-text-container">
          <div class="col-md-10 col-sm-12 px-0 mx-0 home-text">
            <h2 class="display-3 text-uppercase">
              Debugging your day,
              <br />
              one cup at a time.
            </h2>
            <h3 class="h4 mt-3">Brew or order a Perfect Coffee and Enjoy.</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
