import React from "react";
import Sidebar from "./MainPage/sidebar";
import Main from "./MainPage/main";
import Header from "./Header/header"
import "./App.css";

function App() {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default App;
