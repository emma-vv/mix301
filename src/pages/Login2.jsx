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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
        }

        .login-method-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .login-method-card:active {
          transform: translateY(0);
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
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(1);
          cursor: pointer;
          background: rgba(101, 33, 241, 0.15);
          color: rgba(255, 255, 255, 0.4);
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }

        .step-indicator:active {
          transform: scale(0.92);
          transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-indicator.active {
          background: linear-gradient(135deg, #6521f1 0%, #7B3FF2 100%);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(101, 33, 241, 0.5);
          border-color: rgba(255, 255, 255, 0.3);
          animation: stepPulse 2s ease-in-out infinite;
        }

        @keyframes stepPulse {
          0%, 100% {
            box-shadow: 0 4px 16px rgba(101, 33, 241, 0.5);
          }
          50% {
            box-shadow: 0 4px 20px rgba(101, 33, 241, 0.7);
          }
        }

        .step-indicator.completed {
          background: linear-gradient(135deg, rgba(163, 200, 97, 0.8) 0%, rgba(193, 241, 90, 0.8) 100%);
          color: white;
          animation: stepComplete 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-color: rgba(163, 200, 97, 0.5);
        }

        .step-indicator.completed i {
          font-size: 16px;
          color: white;
        }

        @keyframes stepComplete {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .step-connector {
          width: 47.982px;
          height: 1.986px;
          background: rgba(101, 33, 241, 0.3);
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .step-connector::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .step-indicator.active ~ .step-connector,
        .step-indicator.completed ~ .step-connector {
          background: rgba(101, 33, 241, 0.5);
        }

        .step-indicator.active ~ .step-connector::after,
        .step-indicator.completed ~ .step-connector::after {
          left: 100%;
        }
      `}</style>
    </>
  )
}
