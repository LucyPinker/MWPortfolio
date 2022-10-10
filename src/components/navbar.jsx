import { Link } from "react-router-dom";
import { AiTwotoneHome } from 'react-icons/ai';
import React from 'react'

class Navbar extends React.Component{
  render() {
    return <div className="nav-container">
      <Link to="/contact" class="nav-link">Contact</Link>
      <Link to="/music" class="nav-link">Music</Link>
      <Link to="/" class="home-link"><AiTwotoneHome /></Link>
      <Link to="/events" class="nav-link">Events</Link>
      <Link to="/about" class="nav-link">About</Link>
    </div>
  }
}
export default Navbar;
