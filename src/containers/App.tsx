import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTE_HOME} from "../constants/routes";
import {Home} from "./home";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTE_HOME} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
