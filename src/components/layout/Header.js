import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { brand } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-warning mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {brand}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"></i> Добавить
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i> Инфо
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brand: "Мое приложение"
};

Header.propTypes = {
  brand: PropTypes.string.isRequired
};

export default Header;
