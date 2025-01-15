import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Swanda</div>
            <nav className="nav">
                <a href="/" className="navLink">Home</a>
                <a href="/about" className="navLink">로그인</a>
                <a href="/contact" className="navLink">회원가입</a>
            </nav>
        </header>
    );
};

export default Header;
