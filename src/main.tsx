import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router'
import routes from './routes/route.tsx'
import { ThemeProvider } from './providers/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>
     
     <RouterProvider router={routes}/>
        </Provider>
    </ThemeProvider>
    
  </StrictMode>,
)
