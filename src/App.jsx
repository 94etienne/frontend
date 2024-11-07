import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Bus from './pages/BusUI';
import InvalidPage from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/bringback" element={<Navigate to="admin-dashboard" />}>
          {" "}
        </Route>
{/*         <Route path="/" element={<Bus />} /> */}

        <Route path="/" element={<InvalidPage />} />
        
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
