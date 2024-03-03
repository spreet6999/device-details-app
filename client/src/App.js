import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

//* Import components
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4">
        {/* Navigation bar */}
        <nav>
          <Link to="/">All Appliances</Link>
        </nav>

        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
