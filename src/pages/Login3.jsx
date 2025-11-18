import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BackgroundBlur from '../components/BackgroundBlur';
import '../index.css';

export default function Login3() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get the login method from location state or localStorage
  const loginMethod = location.state?.method || localStorage.getItem('login_selected_method') || 'Microsoft';

  const handleStepClick = (step) => {
    // From step 3, can access all steps since they picked a login method
    if (step === 1) {
      navigate('/');
    } else if (step === 2) {
      navigate('/login2');
    } else if (step === 3) {
      // Already on step 3
      return;
    }
  };

  // Load method from localStorage if not in state
  useEffect(() => {
    if (!location.state?.method) {
      const savedMethod = localStorage.getItem('login_selected_method');
      if (savedMethod) {
        // Method already saved, user can navigate freely
      }
    }
  }, [location.state]);

  const handleLogin = () => {
    // Allow login as long as any text is in both fields
    if (email.trim() && password.trim()) {
      navigate('/dashboard');
    }
  };

  return (
    <>
      <BackgroundBlur />
      <div className="login3-body" style={{ position: 'relative', zIndex: 1 }}>
        <div className="login3-header">
          <div style={{ width: '42.66px', height: '42.66px' }}></div>
          <div style={{ width: '42.66px', height: '42.66px' }}></div>
          <div style={{ width: '42.66px', height: '42.66px' }}></div>
        </div>

        <div className="login3-content">
          <div className="login3-header-section">
            <div className="step-indicators">
              <div 
                className="step-indicator completed"
                onClick={() => handleStepClick(1)}
                style={{ cursor: 'pointer' }}
              >
                <i className="fas fa-check"></i>
              </div>
              <div className="step-connector"></div>
              <div 
                className="step-indicator completed"
                onClick={() => handleStepClick(2)}
                style={{ cursor: 'pointer' }}
              >
                <i className="fas fa-check"></i>
              </div>
              <div className="step-connector"></div>
              <div 
                className="step-indicator active"
                onClick={() => handleStepClick(3)}
                style={{ cursor: 'pointer' }}
              >3</div>
            </div>
            <div className="login3-text-container">
              <h1 className="login3-title-text">Login with {loginMethod}</h1>
              <p className="login3-subtitle">Enter your credentials to continue</p>
            </div>
          </div>

          <div className="login3-form">
            <div className="login3-input-group">
              <label htmlFor="email" className="login3-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="login3-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login3-input-group">
              <label htmlFor="password" className="login3-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="login3-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className={`button-component ${!email.trim() || !password.trim() ? 'non-active' : ''}`}
              onClick={handleLogin}
              disabled={!email.trim() || !password.trim()}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .login3-body {
          min-height: 100vh;
          padding: 60px 24px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .login3-header {
          width: 345px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .back-button-login {
          width: 42.657px;
          height: 42.657px;
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
        }

        .login3-content {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
          width: 345px;
        }

        .login3-header-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        }

        .login3-text-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .login3-title-text {
          font-size: 18px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          line-height: 100%;
        }

        .login3-subtitle {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          margin: 0;
          line-height: 100%;
        }

        .login3-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .login3-input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .login3-label {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .login3-input {
          width: 100%;
          height: 56px;
          padding: 0 24px;
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          color: white;
          font-size: 16px;
          font-weight: 400;
          font-family: inherit;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .login3-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .login3-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .login3-input:hover {
          border-color: rgba(255, 255, 255, 0.15);
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
          border: 1.352px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-indicator.active {
          background: #6521f1;
          color: white;
        }

        .step-indicator.completed {
          background: rgba(101, 33, 241, 0.15);
          color: white;
        }

        .step-indicator.completed i {
          font-size: 16px;
          color: white;
        }

        .step-connector {
          width: 47.982px;
          height: 1.986px;
          background: rgba(101, 33, 241, 0.3);
        }
      `}</style>
    </>
  );
}

