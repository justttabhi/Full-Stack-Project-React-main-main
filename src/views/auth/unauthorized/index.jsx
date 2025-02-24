import React from 'react';
import authPic from '../../../assets/error_401.jpg'
import { Link } from 'react-router-dom';
const Unauthorized = () => {

  const handleLogout = (event) => {
    localStorage.clear();
    sessionStorage.clear()
  }

  return (
    <div style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    }}>
      {/* <h2>Unauthorized Access</h2>
      <p>You do not have permission to access this page.</p> */}
      <img src={authPic} alt="Unauthorized Page" />
      <Link to="/login" className="dropdown-item" onClick={handleLogout}>
        <i className="feather icon-lock" /> Logout
      </Link>
    </div>
  )
}

export default Unauthorized;
