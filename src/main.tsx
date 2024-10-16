import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
