import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Detailed from './pages/Detailed';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='detailed' element={<Detailed />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
