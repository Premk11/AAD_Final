import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import Comp from "./Components/Comp";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Comp />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
