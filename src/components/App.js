import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Signup } from './Signup'
import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { AuthProvider } from '../contexts/Auth'
import { PrivateRoute } from './PrivateRoute'

export function App() {
  return (
    <div>
      <h1>StudyJio</h1>

      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}
