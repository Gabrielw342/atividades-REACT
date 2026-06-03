import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Main from "./paginas/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/main"
          element={<Main />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;