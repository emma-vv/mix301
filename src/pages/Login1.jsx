import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundBlur from '../components/BackgroundBlur'
import '../index.css'

export default function Login1() {
  const navigate = useNavigate()

  return (
    <>
      <BackgroundBlur />
      <div className="login-body">
        <div className="login-logo">
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="160" fill="#000" rx="37"/>
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF00FF"/>
                <stop offset="50%" stopColor="#6521F1"/>
                <stop offset="100%" stopColor="#0000FF"/>
              </linearGradient>
            </defs>
            <path d="M80 30 C95 35, 110 45, 120 60 C130 75, 130 95, 120 110 C110 125, 95 135, 80 130 C65 135, 50 125, 40 110 C30 95, 30 75, 40 60 C50 45, 65 35, 80 30 Z" fill="url(#grad)"/>
            <path d="M80 60 L85 75 L100 75 L88 85 L93 100 L80 90 L67 100 L72 85 L60 75 L75 75 Z" fill="white"/>
          </svg>
        </div>
        <div className="login-content">
          <div className="login-header">
            <div className="step-indicators">
              <div className="step-indicator active">1</div>
              <div className="step-connector"></div>
              <div className="step-indicator">2</div>
            </div>
            <div>
              <h1 className="login-title">Welcome to Aurora</h1>
              <p className="login-subtitle">Please log in to continue</p>
            </div>
          </div>
          <div className="login-button-wrapper">
            <button
              className="login-button"
              onClick={() => navigate('/login2')}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .login-body {
          min-height: 100vh;
          padding: 220px 24px 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .login-logo {
          width: 160px;
          height: 160px;
          border: 2px solid rgba(101, 33, 241, 0.45);
          border-radius: 37px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-logo svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .login-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
          justify-content: flex-end;
          min-height: 0;
          width: 345px;
        }

        .login-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
          width: 100%;
        }

        .login-title {
          font-size: 24px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          line-height: 100%;
        }

        .login-subtitle {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          margin: 0;
          line-height: 100%;
        }

        .login-button-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-button {
          width: 345px;
          height: 56px;
          border: 1.352px solid rgba(255, 255, 255, 0.5);
          border-radius: 16px;
          background: transparent;
          color: white;
          font-size: 16px;
          font-weight: 600;
          font-family: "Roboto", sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0px 1px 2px 0px inset rgba(255, 255, 255, 0.2);
        }

        .login-button:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .step-indicators {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .step-indicator {
          width: 47.982px;
          height: 47.982px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 400;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .step-indicator.active {
          background: #6521f1;
          color: white;
        }

        .step-indicator:not(.active) {
          background: rgba(101, 33, 241, 0.15);
          color: rgba(255, 255, 255, 0.4);
        }

        .step-connector {
          width: 47.982px;
          height: 1.986px;
          background: rgba(101, 33, 241, 0.3);
          flex-shrink: 0;
        }
      `}</style>
    </>
  )
}
