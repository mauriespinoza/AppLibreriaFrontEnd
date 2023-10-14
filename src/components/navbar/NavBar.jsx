import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoriesContext from "../../context/CategorieContext";

import "./navbar.css";
import { BadgeButton } from "../card/BadgeButton";
import { BadgeButtonUser } from "../badge/BadgeButtonUser";
import {BadgeButtonSearch} from "../badge/BadgeButtonSearch";
import { useAuth } from "../../hooks/useAuth";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  const globalContext = useContext(CategoriesContext);

  const { getCategories } = globalContext;

  const { token } = useAuth();

  // const rol = "user";

  const getAllCategories = async () => {
    const data = await getCategories();
    console.log("getAllCategories: " + JSON.stringify(data))
    setCategories(data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleChangeCategories = (categorie) => {
    console.log(categorie);
  };

  // console.log(categories);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Candelabra
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categories.map((categoria) => (
                    <li key={categoria._id}>
                      <Link
                        className="dropdown-item"
                        to={`/productos/${categoria._id}`}
                        onClick={() =>
                          handleChangeCategories(categoria.description)
                        }
                      >
                        {categoria.description}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {token != "" ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/datos">
                    Mi Cuenta
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />

              <BadgeButtonSearch />
            </form>
            <div>
              <BadgeButtonUser />
            </div>
            <div>
              <BadgeButton numprod={1}/>
            </div>
          </div>
        </div>
      </nav>
    {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </>
  );
};
