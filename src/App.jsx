import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages';
AOS.init();
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
