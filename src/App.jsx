import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Bus from './pages/BusUI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/bringback" element={<Navigate to="admin-dashboard" />}>
          {" "}
        </Route>
        <Route path="/" element={<Bus />} />
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
