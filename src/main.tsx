import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './../store.ts'



const queryClient = new QueryClient()
  
createRoot(document.getElementById('root')!).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
<Provider store={store}>
    <App />
</Provider>
    </QueryClientProvider>   
  </StrictMode>,
)
