import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  )

  return (
    <div>
      <Link to="/">React Ssr</Link>
      <div>
        <Link to="/users">Users</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/admins">Admins</Link>
        &nbsp;&nbsp;&nbsp;
        {authButton}
      </div>
    </div>
  )
};

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header);