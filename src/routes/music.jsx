import { Link } from "react-router-dom";
import Player from "../components/player"
import '../stylesheets/music.css';

function Music() {
  return(
    <div className="Music">
      <h1>Music</h1>
      <Link to="/">Home</Link>
      <Player></Player>
    </div>
  );
}
export default Music;
