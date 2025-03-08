import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as Chakra} from "./components/ui/provider"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
     <Chakra>
     <App />
     </Chakra>
    </Router>
    
  </StrictMode>,
)
