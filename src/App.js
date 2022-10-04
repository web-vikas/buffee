import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import './pages/assest/css/style.css'
import { DownloadFile } from "./pages/DownloadFile";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='search/*' element={<Search />} />
        <Route path='download/*' element={<DownloadFile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
