import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundBlur from '../components/BackgroundBlur'
import { toastManager } from '../utils/toast'
import '../index.css'

export default function Login2() {
  const navigate = useNavigate()
  
  const handleStepClick = (step) => {
    if (step === 1) {
      // Can go back to step 1 since they clicked login button
      navigate('/');
    } else if (step === 2) {
      // Already on step 2
      return;
    } else if (step === 3) {
      // Can only go to step 3 if login method was picked
      const hasPickedMethod = localStorage.getItem('login_has_picked_method') === 'true';
      if (hasPickedMethod) {
        const method = localStorage.getItem('login_selected_method') || 'Microsoft';
        navigate('/login3', { state: { method } });
      } else {
        toastManager.info('Please select a login method first');
      }
    }
  };

  const handleMethodClick = (method) => {
    localStorage.setItem('login_has_picked_method', 'true');
    localStorage.setItem('login_selected_method', method);
    navigate('/login3', { state: { method } });
  };

  return (
    <>
      <BackgroundBlur />
      <div className="login2-body" style={{ position: 'relative', zIndex: 1 }}>
        <div className="login2-header">
          <div style={{ width: '42.66px', height: '42.66px' }}></div>
          <div style={{ width: '42.66px', height: '42.66px' }}></div>
          <div style={{ width: '42.66px', height: '42.66px' }}></div>
        </div>

        <div className="login2-content">
          <div className="login2-header-section">
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
                className="step-indicator active"
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
            <div className="login2-text-container">
              <h1 className="login2-title-text">Choose Login Method</h1>
              <p className="login2-subtitle">Select your preferred login option</p>
            </div>
          </div>

          <div className="login-methods">
            <div className="login-method-card" onClick={() => handleMethodClick('Microsoft')}>
              <div className="login-method-icon microsoft">
                <i className="fab fa-microsoft" style={{ fontSize: '24px', color: '#6521f1' }}></i>
              </div>
              <div className="login-method-content">
                <p className="login-method-name">Microsoft</p>
                <p className="login-method-desc">Login with your Microsoft account</p>
              </div>
              <i className="fas fa-chevron-right login-method-arrow" style={{ color: 'white' }}></i>
            </div>

            <div className="login-method-card" onClick={() => handleMethodClick('Feide')}>
              <div className="login-method-icon feide">
                <i className="fas fa-graduation-cap" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div className="login-method-content">
                <p className="login-method-name">Feide</p>
                <p className="login-method-desc">Login with your Feide account</p>
              </div>
              <i className="fas fa-chevron-right login-method-arrow" style={{ color: 'white' }}></i>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .login2-body {
          min-height: 100vh;
          padding: 60px 24px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .login2-header {
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

        .login2-content {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: center;
          width: 345px;
        }

        .login2-header-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        }

        .login2-text-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .login2-title-text {
          font-size: 18px;
          font-weight: 600;
          color: white;
          text-align: center;
          margin: 0;
          line-height: 100%;
        }

        .login2-subtitle {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          margin: 0;
          line-height: 100%;
        }

        .login-methods {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .login-method-card {
          border: 1.352px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 24px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .login-method-card:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .login-method-icon {
          width: 47.982px;
          height: 47.982px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .login-method-icon.microsoft {
          background: white;
        }

        .login-method-icon.feide {
          background: #6521f1;
          box-shadow: 0px 4px 16px 0px rgba(101, 33, 241, 0.3);
          border: 1.352px solid rgba(255, 255, 255, 0.2);
        }

        .login-method-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .login-method-name {
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0;
        }

        .login-method-desc {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .login-method-arrow {
          width: 19.987px;
          height: 19.987px;
          flex-shrink: 0;
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
  )
}
