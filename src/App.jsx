import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages';
import Signup from './pages/sign-in';
import Login from './pages/login';
import ChatBox from './components/chatBox';
AOS.init();
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbox" element={<ChatBox/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
