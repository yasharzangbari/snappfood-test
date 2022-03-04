import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE_RESTAURANTS } from "../constants/routes";
import { Restaurants } from "./restaurants";
import Layout from "../components/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTE_RESTAURANTS} element={<Restaurants />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
