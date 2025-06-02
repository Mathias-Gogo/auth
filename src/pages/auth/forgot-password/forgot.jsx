import logo from '../../../assets/logo-black.svg';
import './forgot.css';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <div className="forgot-password-container">
            <form className="forgot-password-form">
                <div className="logo">
                    <img src={logo} alt="Mexuri Logo" />
                </div>

                <h2>Reset Your Password</h2>
                <p className="instructions">Enter your email and we'll send you a link to reset your password.</p>

                <div className="form-input">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                    />
                    <button type="submit" className="submit-btn">Send Reset Link</button>
                </div>

                <div className="back-to-login">
                    <Link to="/">← Back to Login</Link>
                </div>
            </form>
        </div>
    );
}