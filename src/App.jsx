import React from 'react'
import './App.css'
import HomePage from "./pages/HomePage"
import DetailsPage from './pages/DetailsPage'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <>
    <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hospital:id" element={<DetailsPage />} />
      </Routes>
   </>
  )
}

export default App