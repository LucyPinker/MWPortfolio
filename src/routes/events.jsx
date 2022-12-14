import '../stylesheets/sharedRoutes.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';



function Event() {
  return (
    <div className="Event">
      <Navbar />
      <div class="route-container">
        <div className="title-container">
          <h1>Events</h1>
        </div>
        <div className="body-container">
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Event;
