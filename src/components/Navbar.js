import React from 'react'
// import ReactDOM from 'react'
import propTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-${props.mode} p-4`}>
      <div className="container-fluid">
        <a style={{color: 'aquamarine'}} className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <div className="form-check form-switch ">
              <input className={`form-check-input`} style={{backgroundColor: props.mode==='dark'? 'white':'black', border: '4px solid aqua', filter: 'blur(5px)', height:'32px', backgroundImage:'none'}} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
            </div>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Set Title'
}
