import React, { useState } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import LoginPage from "./pages/login";
import LoginSuccessPage from "./pages/loginSuccess";
import './app.scss';
//====================================================================================================================//

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <div className="app">
            <Header />
            <div className="app-container">
                {!isAuthenticated && <LoginPage setIsAuthenticated={setIsAuthenticated} />}
                {isAuthenticated && <LoginSuccessPage isAuthenticated={isAuthenticated}/> }
            </div>
            <Footer />
        </div>
    );
}

export default App;
