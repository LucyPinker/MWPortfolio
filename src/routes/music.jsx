import Player from "../components/player"
import '../stylesheets/sharedRoutes.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


function Music() {
  return(
    <div className="Music">
      <Navbar/>
      <div class="route-container">
        <div className="title-container">
          <h1>Music</h1>
        </div>
        <div className="body-container">
          <div className="listen">
            <Player></Player>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
export default Music;
