import '../stylesheets/sharedRoutes.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


function Contact() {
  return (
    <div className="Contact">
      <Navbar />
      <div class="route-container">
        <div className="title-container">
          <h1>Contact</h1>
        </div>
        <div className="body-container">
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Contact;
