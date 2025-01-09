import React from "react";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h1 style={styles.title}>Swanda</h1>
      <p>질문을 통해 지식을 공유하세요!</p>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "20%",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
};

export default Sidebar;
