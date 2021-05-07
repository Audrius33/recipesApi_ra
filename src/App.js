import logo from './logo.svg';
import './App.css';
import Upload from "./pages/Upload";
import Gallery from "./pages/Gallery";
import Recipe from "./pages/Recipe";
import Favorites from "./components/Favorites";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <div className="d-flex">
            <Link className="m-20 color" to="/">Home</Link>
            <Link className="m-20 color" to="/upload">Upload</Link>
            <Link className="m-20 color" to="/favorites">Favorites</Link>
          </div>

          <Switch>
            <Route exact path="/">
              <Gallery/>
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/recipe/:id">
              <Recipe/>
            </Route>
            <Route path="/favorites/">
              <Favorites/>
            </Route>

          </Switch>

        </div>
      </Router>
  );
}

export default App;
