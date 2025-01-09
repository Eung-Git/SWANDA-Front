import React from "react";
import Sidebar from "./MainPage/sidebar";
import Main from "./MainPage/main";

function App() {
  return (
    <div style={styles.container}>
      <Sidebar />
      <Main />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
};

export default App;
