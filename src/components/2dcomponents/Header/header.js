import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'


const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          This is my navbar
        </Link>
      </h1>
      <div className="container">
      <h4>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </h4>
      <h4>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        My Work
        </Link>
      </h4>
      <h4>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        Contact
        </Link>
      </h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
