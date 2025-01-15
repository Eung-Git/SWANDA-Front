import React, { useState, useEffect } from "react";
import "./login.css"; // 스타일을 별도의 CSS 파일에서 관리한다고 가정

function LoginPage({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    schoolEmail: "",
    password: "",
    confirmPassword: "",
    major: "",
    phonePart1: "",
    phonePart2: "",
    phonePart3: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let timer;
    if (isCodeSent && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCodeSent, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "confirmPassword" || name === "password") {
      if (
        formData.password === value ||
        (name === "confirmPassword" && formData.password === formData.confirmPassword)
      ) {
        setPasswordError("");
      } else {
        setPasswordError("비밀번호가 일치하지 않습니다.");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      const emailRegex = /^[^@\s]+@kookmin\.ac\.kr$/;
      if (!emailRegex.test(formData.schoolEmail)) {
        alert("학교 이메일은 '@kookmin.ac.kr' 형식으로 입력해주세요.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert("비밀번호가 일치하지 않습니다!");
        return;
      }

      alert(`${formData.username}님, 회원가입이 완료되었습니다.`);
      setIsSignUp(false);
    } else if (isForgotPassword) {
      if (!isCodeSent) {
        setIsCodeSent(true);
        setTimeLeft(300);
        alert(`인증번호가 ${formData.schoolEmail}로 전송되었습니다.`);
      } else {
        alert("비밀번호 찾기가 완료되었습니다. 새로운 비밀번호로 로그인하세요.");
        setIsForgotPassword(false);
      }
    } else {
      alert(`${formData.schoolEmail}님, 로그인되었습니다.`);
      onLogin();
    }
  };

  const handleNicknameCheck = () => {
    if (formData.nickname.trim() === "") {
      setNicknameError("닉네임을 입력해주세요.");
    } else {
      setNicknameError("");
      alert(`${formData.nickname}은(는) 사용 가능한 닉네임입니다.`);
    }
  };

  return (
    <div className="login-page">
      <h1>{isSignUp ? "회원가입" : isForgotPassword ? "비밀번호 찾기" : "로그인"}</h1>
      <form onSubmit={handleFormSubmit}>
        {isSignUp && (
          <>
            <div className="form-group">
              <label htmlFor="username">이름</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nickname">닉네임</label>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  onClick={handleNicknameCheck}
                  style={{
                    padding: "0.5rem",
                    fontSize: "12px",
                    color: "white",
                    backgroundColor: "#007bff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  중복 확인
                </button>
              </div>
              {nicknameError && <p className="error-message" style={{ color: "red" }}>{nicknameError}</p>}
            </div>
          </>
        )}
        {(isSignUp || isForgotPassword || !isSignUp) && (
          <div className="form-group">
            <label htmlFor="schoolEmail">학교 이메일 (아이디)</label>
            <input
              type="email"
              id="schoolEmail"
              name="schoolEmail"
              value={formData.schoolEmail}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        {!isForgotPassword && (
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required={!isForgotPassword}
            />
          </div>
        )}
        {isSignUp && (
          <>
            <div className="form-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {passwordError && <p className="error-message" style={{ color: "red" }}>{passwordError}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="major">전공</label>
              <select
                id="major"
                name="major"
                value={formData.major}
                onChange={handleInputChange}
                required
              >
                <option value="">전공을 선택하세요</option>
                <option value="소프트웨어학부">소프트웨어학부</option>
                <option value="인공지능학부">인공지능학부</option>
                <option value="타과">타과</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">전화번호</label>
              <div className="phone-input" style={{ display: "flex", gap: "5px" }}>
                <input
                  type="text"
                  name="phonePart1"
                  value={formData.phonePart1}
                  onChange={handleInputChange}
                  maxLength="3"
                  required
                />
                -
                <input
                  type="text"
                  name="phonePart2"
                  value={formData.phonePart2}
                  onChange={handleInputChange}
                  maxLength="4"
                  required
                />
                -
                <input
                  type="text"
                  name="phonePart3"
                  value={formData.phonePart3}
                  onChange={handleInputChange}
                  maxLength="4"
                  required
                />
              </div>
            </div>
          </>
        )}
        {isForgotPassword && isCodeSent && (
          <>
            <div className="form-group">
              <label htmlFor="verificationCode">인증번호</label>
              <input
                type="text"
                id="verificationCode"
                name="verificationCode"
                onChange={handleInputChange}
                required
              />
            </div>
            <p>남은 시간: {formatTime(timeLeft)}</p>
          </>
        )}
        <button type="submit" style={{ width: "100%" }}>{isSignUp ? "회원가입" : isForgotPassword ? (isCodeSent ? "확인" : "비밀번호 찾기") : "로그인"}</button>
      </form>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", gap: "10px" }}>
        {!isForgotPassword && (
          <button
            className="toggle-button"
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ flex: "1", maxWidth: "200px" }}
          >
            {isSignUp ? "이미 계정이 있으신가요? 로그인" : "계정이 없으신가요? 회원가입"}
          </button>
        )}
        {!isSignUp && !isForgotPassword && (
          <button
            className="toggle-button"
            onClick={() => setIsForgotPassword(true)}
            style={{ flex: "1", maxWidth: "200px" }}
          >
            비밀번호 찾기
          </button>
        )}
      </div>
      {isForgotPassword && (
        <button
          className="toggle-button"
          onClick={() => {
            setIsForgotPassword(false);
            setIsCodeSent(false);
            setTimeLeft(0);
          }}
        >
          로그인으로 돌아가기
        </button>
      )}
    </div>
  );
}

export default LoginPage;