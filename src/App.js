import './stylesheets/App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="text-container">
          <h1>Homepage</h1>
            <div class="links">
            <Link to="/music" class="link">Music</Link>
            <Link to="/events" class="link">Events</Link>
            <Link to="/about" class="link">About</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
