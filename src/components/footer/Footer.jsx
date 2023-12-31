import { Link } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-grid">
          <section className="footer-1">
            <h2>Candelabra</h2>
            <h4>
              Tenemos todo lo que necesitas y lo que necesitas, pero siempre
              soñaste, lo más cuite y funcional en papeleria, oficina y mucho
              más.
            </h4>
          </section>
          <section className="footer-2">
            <h2>Informacíon</h2>

            <p>
              <a href="#">Contáctanos</a>
            </p>
          </section>
          <section className="footer-3">
            <h2>Mi Cuenta</h2>
            <p>
              <Link to="/register">Regístrate</Link>
            </p>
            <p>
              <Link to="/login">Inicio de sesión</Link>
            </p>
          </section>
          <section className="footer-4">
            <h2>Siguenos en Redes Sociales</h2>
            <a >
              <img src="https://res.cloudinary.com/dxy1spfug/image/upload/v1694387699/icons/facebook_sbpenp.webp" />
            </a>
            <a>
              <img src="https://res.cloudinary.com/dxy1spfug/image/upload/v1694387703/icons/instagram_xbbhbq.webp" />
            </a>
            <a>
              <img src="https://res.cloudinary.com/dxy1spfug/image/upload/v1694387704/icons/twitter_thsoqe.webp" />
            </a>
          </section>
        </div>
      </footer>
    </>
  );
};
