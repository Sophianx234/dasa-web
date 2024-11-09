import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


import store from './../store.tsx'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()
  
createRoot(document.getElementById('root')!).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
<ApiProvider store={store}>
    <App />
</ApiProvider>
    </QueryClientProvider>   
  </StrictMode>,
)
