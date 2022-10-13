import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Page from "./components/Page";
import DrawerPage from "./components/DrawerPage";
import ModalPage from "./components/ModalPage";

function App() {
  return (
    <div className="App">
      <Router window={window}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: '10px'
          }}
        >
          <Link to={"/"}>click to page root</Link>
          <Link to={"/a"}>click to page a</Link>
          <Link to={"/b"}>click to page b</Link>
          <Link to={"/drawer"}>click to page drawer</Link>
          <Link to={"/modal"}>click to page modal</Link>
        </div>
        <Routes>
        <Route
            path="/modal"
            element={<ModalPage />}
          ></Route>
        <Route
            path="/drawer"
            element={<DrawerPage />}
          ></Route>
          <Route
            path="/a"
            element={<Page content={"this is path a"} />}
          ></Route>
          <Route
            path="/b"
            element={<Page content={"this is path b"} />}
          ></Route>
          <Route
            path="/"
            element={<Page content={"this is page root"} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

// function

export default App;
