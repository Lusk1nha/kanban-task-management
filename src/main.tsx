import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppProviders from './components/AppProviders'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProviders>
    <App />
  </AppProviders>
)
