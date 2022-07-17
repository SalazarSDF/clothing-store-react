import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>I am tht JOPA #@@@__ ))) </h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="jopa" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
