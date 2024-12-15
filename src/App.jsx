import Nav from './components/pages/nav.jsx'; 
import { BrowserRouter } from 'react-router-dom';
function App() {


  return (
    <BrowserRouter basename="/entrance_prepare">
      <Nav />
      </BrowserRouter>
  )
}

export default App
