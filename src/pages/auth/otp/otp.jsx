import { useState, useRef, useEffect } from 'react';
import logo from '../../../assets/logo-black.svg';
import './otp.css';

export default function OTPVerification() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isInvalid, setIsInvalid] = useState(false);
    const [timer, setTimer] = useState(30);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            setIsInvalid(false);

            // Auto-focus to next input
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.join('').length !== 6) {
            setIsInvalid(true);
            return;
        }
        // Add your OTP verification logic here
        console.log('OTP Submitted:', otp.join(''));
    };

    const resendOTP = () => {
        setTimer(30);
        // Add your OTP resend logic here
        console.log('Resending OTP...');
    };

    useEffect(() => {
        const interval = timer > 0 && setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div className="otp-container">
            <form className="otp-form" onSubmit={handleSubmit}>
                <div className="logo">
                    <img src={logo} alt="Company Logo" />
                </div>

                <h2>Verify Your Account</h2>
                <p className="instructions">
                    We've sent a 6-digit code to your email<br />
                    <p id='userEmail'></p>
                </p>

                <div className={`otp-inputs ${isInvalid ? 'invalid' : ''}`}>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            maxLength={1}
                            autoFocus={index === 0}
                        />
                    ))}
                </div>

                {isInvalid && (
                    <p className="error-message">Please enter a complete 6-digit code</p>
                )}

                <button type="submit" className="verify-btn">
                    Verify Account
                </button>

                <div className="resend-section">
                    <p>
                        Didn't receive code?{' '}
                        {timer > 0 ? (
                            <span className="timer">Resend in {timer}s</span>
                        ) : (
                            <button type="button" className="resend-btn" onClick={resendOTP}>
                                Resend OTP
                            </button>
                        )}
                    </p>
                </div>
            </form>
        </div>
    );
}