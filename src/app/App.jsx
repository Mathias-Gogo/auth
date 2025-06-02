import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from '../pages/auth/log-in/log'
import './App.css'
import SignUp from '../pages/auth/sign-up/signUp'
import ProfilePage from '../pages/log/profile/profile'
import ForgotPassword from '../pages/auth/forgot-password/forgot'
import OTPVerification from '../pages/auth/otp/otp'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index path="/" element={<LogIn />} />

          <Route path='/sign-up' element={<SignUp />} />

          <Route path='/forgot-password' element={<ForgotPassword />} />

          <Route path='/email-verification' element={<OTPVerification />} />

          <Route path='/user-profile' element={<ProfilePage />} />
        </Routes>
      </div>
    </Router >
  )
}

export default App
