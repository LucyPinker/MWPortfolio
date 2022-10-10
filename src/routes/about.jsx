import '../stylesheets/sharedRoutes.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


function About() {
  return (
    <div className="About">
      <Navbar />
      <div class="route-container">
        <div className="title-container">
          <h1>About</h1>
        </div>
        <div className="body-container">
          <div className="bio">
            <p>Matt Pinker is a Manchester-based sound artist interested in electronic music with a focus on electroacoustic, ambient and techno. Recent work has been inspired by industrial themes, from a collection of compositions in response to Brutalist architecture, and an interactive sound installation constructed from historic steel cutlery.</p>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}
export default About;
