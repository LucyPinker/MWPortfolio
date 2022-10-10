import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './stylesheets/index.css';
import App from './App';
import Music from "./routes/music";
import Event from "./routes/events";
import About from "./routes/about";
import Contact from "./routes/contact";
import './stylesheets/navbar.css';
import './stylesheets/footer.css';
import './stylesheets/music.css';
import './stylesheets/about.css';
import reportWebVitals from './reportWebVitals';
import './stylesheets/contact.css';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<App/>} />
        <Route path="music" element={<Music/>} />
        <Route path="about" element={<About/>} />
        <Route path="events" element={<Event/>} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
