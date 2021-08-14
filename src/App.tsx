import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import LoginPage from "./pages/login";
import './app.scss';
//====================================================================================================================//

function App() {
  return (
    <div className="app">
        <Header />
        <div className="app-container">
            {/* START - Would implement page routing logic here */}
            <LoginPage />
            {/* END - Would implement page routing logic here */}
        </div>
        <Footer />
    </div>
  );
}

export default App;
