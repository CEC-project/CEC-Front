import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

import Router from "./router/router";

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Router />
        <ToastContainer
          className="toast"
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
        />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
