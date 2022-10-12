import { Link } from "react-router-dom";
import React from 'react'
import { GrSoundcloud } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import '../stylesheets/footer.css';



class Footer extends React.Component {
  render() {
    return <div className="footer-container">
      <ul class="footer-items">
        <li class="footer-item">© LCP 2022 |</li>
        <li class="footer-item"><Link to="https://www.instagram.com/_cylindric/" ><FiInstagram /></Link></li>
        <li class="footer-item"><Link to="https://soundcloud.com/matthew-pinker" ><GrSoundcloud /></Link></li>
      </ul>
    </div>
  }
}
export default Footer;
