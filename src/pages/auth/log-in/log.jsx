import logo from '../../../assets/logo-black.svg';
import './log.css';
import { Link } from 'react-router-dom';

export default function LogIn() {
    return (<>
        <div className="container">
            <form action="" method="get">
                <div className="logo">
                    <img src={logo} alt="Mexuri Logo" />
                </div>
                <div className="form-input">
                    <input id='email' type="email" placeholder="Email" autoComplete="Email" required />
                    <input id='password' type="password" placeholder="Password" required />

                    { /*Should link to '/user-profile' after authentication */}
                    <button id='submitBtn' type="submit" className="submit-btn">Log In</button>
                </div>

                <div className="alternative-input">
                    <div className="remember-me">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>

                <div className="other-signin">
                    <div className="google">
                        <button type="button" className="google-btn">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" />
                            </svg>


                            Log in with Google
                        </button>
                    </div>

                    <div className="apple-id">
                        <button type="button" className="apple-btn">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                            </svg>


                            Log in with Apple
                        </button>
                    </div>
                </div>
                <div className="alternative-input">
                    <p>Don't have an account?</p>
                    <Link to="/sign-up">Sign Up?</Link>
                </div>
            </form>
        </div>
    </>)
}