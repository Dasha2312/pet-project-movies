// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallBack from './UI/ErrorFallBack/ErrorFallBack.jsx'

import App from './App.jsx'
import './main.scss'

createRoot(document.getElementById('root')).render(

  <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.replace("/")}>
  <App />
</ErrorBoundary>

)
