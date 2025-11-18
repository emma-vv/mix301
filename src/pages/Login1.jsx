import React from "react";
import { useNavigate } from "react-router-dom";
import BackgroundBlur from "../components/BackgroundBlur";
import { toastManager } from "../utils/toast";
import "../index.css";

export default function Login1() {
  const navigate = useNavigate();
  
  const handleStepClick = (step) => {
    if (step === 1) {
      // Already on step 1
      return;
    } else if (step === 2) {
      // Can only go to step 2 if login button was clicked
      const hasClickedLogin = localStorage.getItem('login_has_clicked_login') === 'true';
      if (hasClickedLogin) {
        navigate('/login2');
      } else {
        toastManager.info('Please click the Log In button first');
      }
    } else if (step === 3) {
      // Cannot go to step 3 from step 1
      toastManager.info('Please log in first');
    }
  };

  const handleLoginClick = () => {
    localStorage.setItem('login_has_clicked_login', 'true');
    navigate("/login2");
  };

  return (
    <>
      <BackgroundBlur />
      <div className="login-body">
        <div className="login-header">
          <div style={{ width: '42.66px', height: '42.66px' }}></div>
          <div style={{ width: '42.66px', height: '42.66px' }}></div>
          <div style={{ width: '42.66px', height: '42.66px' }}></div>
        </div>
        <div className="login-content">
          <div className="login-header-section">
            <div className="step-indicators">
              <div 
                className="step-indicator active"
                onClick={() => handleStepClick(1)}
                style={{ cursor: 'pointer' }}
              >1</div>
              <div className="step-connector"></div>
              <div 
                className="step-indicator"
                onClick={() => handleStepClick(2)}
                style={{ cursor: 'pointer' }}
              >2</div>
              <div className="step-connector"></div>
              <div 
                className="step-indicator"
                onClick={() => handleStepClick(3)}
                style={{ cursor: 'pointer' }}
              >3</div>
            </div>
          </div>
          <div className="login-logo">
            <img 
              src="/icon.png" 
              alt="Aurora Logo" 
              className="login-logo-img"
            />
          </div>
          <div className="login-text-container">
            <h1 className="login-title">Welcome to Aurora</h1>
            <p className="login-subtitle">Please log in to continue</p>
          </div>
          <div className="login-button-wrapper">
            <button
              className="button-component"
              onClick={handleLoginClick}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .login-body {
          min-height: 100vh;
          padding: 60px 24px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .login-header {
          width: 345px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .login-content {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
          width: 345px;
        }

        .login-header-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
          width: 100%;
        }

        .login-logo {
          width: 160px;
          height: 160px;
          position: relative;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .login-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: transparent;
          display: block;
        }

        .login-text-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .login-title {
          font-size: 18px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          line-height: 100%;
        }

        .login-subtitle {
          font-size: 14px;
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
  );
}
