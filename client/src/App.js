import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Router from "./routes";
function App() {
  return (
    <>
      <div className="app_wrapper">
        <BrowserRouter>
          <Switch>
            <Router />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
