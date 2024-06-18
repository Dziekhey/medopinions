import React from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import DetailsPage from './pages/DetailsPage'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import HospitalsPage from './pages/HospitalsPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import AuthProvider from './services/AuthProvider'

const App = () => {
  return (
   <AuthProvider>
    <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hospital/:id" element={<DetailsPage />} />
        <Route path="/searched-hospitals" element={<HospitalsPage />} />
        <Route path="/sign_up" element={<SignupPage />} />
        <Route path="/sign_in" element={<LoginPage />} />
      </Routes>
   </AuthProvider>
  )
}

export default App