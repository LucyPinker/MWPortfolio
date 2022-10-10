import './stylesheets/App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="image"></div>
        <div class="text-container">
          <h2 class="name">Matthew Pinker</h2>
          <h3>Electro Acoustic Artist</h3>
            <div class="links">
            <Link to="/music" class="link">Music</Link>
            <Link to="/events" class="link">Events</Link>
            <Link to="/about" class="link">About</Link>
            <Link to="/contact" class="link">Contact</Link>
            </div>
        </div>
      </div>
    </div>
  )
};

export default App;
