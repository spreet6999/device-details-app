import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//* Import components
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <div className="mx-auto">
        {/* Navigation bar */}
        <Navbar />

        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
