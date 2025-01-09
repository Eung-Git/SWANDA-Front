import React, { useState } from "react";

const Main = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (question.trim() === "") return;
    console.log("질문:", question);
    setQuestion(""); // 질문 입력란 초기화
  };

  return (
    <div style={styles.main}>
      <h2 style={styles.heading}>질문 입력</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          style={styles.textarea}
          placeholder="여기에 질문을 입력하세요..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit" style={styles.button}>
          질문하기
        </button>
      </form>
    </div>
  );
};

const styles = {
  main: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "none",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
};

export default Main;
