import React from "react";
import Sidebar from "./MainPage/sidebar";
import Main from "./MainPage/main";
import Header from "./Header/header";

function App() {
    return (
        <div style={styles.container}>
            <Header />
            <div style={styles.content}>
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    content: {
        display: "flex",
        flex: 1,
        overflow: "hidden",
    },
};

export default App;
