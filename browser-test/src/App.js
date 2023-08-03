import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cookie from "./pages/cookie";
import LocalStorage from "./pages/localStorage";
import SessionStorage from "./pages/sessionStorage";
import IndexedDB from "./pages/indexedDB";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/cookie">cookie</Link>
              </li>
              <li>
                <Link to="/localStorage">localStorage</Link>
              </li>
              <li>
                <Link to="/sessionStorage">sessionStorage</Link>
              </li>
              <li>
                <Link to="/indexedDB">indexedDB</Link>
              </li>
            </ul>
          </nav>

          <Route path="/cookie" element={<Cookie />} />
          <Route path="/localStorage" element={<LocalStorage />} />
          <Route path="/sessionStorage" element={<SessionStorage />} />
          <Route path="/indexedDB" element={<IndexedDB />} />
        </div>
      </Router>
    </>
  );
}

export default App;
