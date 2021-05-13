import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import BlockList from "./components/BlocksList";
import BlockPage from "./components/BlockPage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={BlockList} />
        <Route path="/block/:blockHeight" component={BlockPage} />
      </Router>
    </div>
  );
}

export default App;
