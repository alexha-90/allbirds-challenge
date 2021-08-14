import React from 'react';
import Header from "./components/header"
import Footer from "./components/footer"
import LoginPage from "./pages/login";
//====================================================================================================================//

function App() {
  return (
    <div className="App">
        <Header />
        {/* START - Would implement page routing logic here */}
        <LoginPage />
        {/* END - Would implement page routing logic here */}
        <Footer />
    </div>
  );
}

export default App;
