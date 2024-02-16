
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Videos from './pages/Videos';
import Reviews from './pages/Reviews';
import Contactus from './pages/Contactus';
import Aboutus from './pages/Aboutus';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './Navbar/Header';
import Userprofile from './pages/Userprofile';


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Videos" element={<Videos />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path='/profile' element={< Userprofile />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
