import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

//? Layout website
import LayoutAdmin from './pages/layouts/Admin'
import LayoutClient from './pages/layouts/Client'

//? Pages
import HomePage from './pages/client/home'
import Dashboard from './pages/admin/dashboard'
import { Navigate } from 'react-router'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          //? Router client
          <Route path="/" element={<LayoutClient />}>
            <Route index element={<HomePage />} />
          </Route>
          //? Router admin
          <Route path="admin" element={<LayoutAdmin />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
