import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { SubmissionProvider } from './context/SubmissionContext.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SubmissionProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </SubmissionProvider>
  </StrictMode>
);
