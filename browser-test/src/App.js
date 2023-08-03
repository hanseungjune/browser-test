import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CookiePage from "./pages/CookiePage";
import LocalStoragePage from "./pages/LocalStoragePage";
import SessionStoragePage from "./pages/SessionStoragePage";
import IndexedDBPage from "./pages/IndexedDBPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/localStorage" element={<LocalStoragePage />} />
        <Route path="/sessionStorage" element={<SessionStoragePage />} />
        <Route path="/indexedDB" element={<IndexedDBPage />} />
      </Routes>
    </Router>
  );
}

export default App;
