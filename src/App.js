import { Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Register from './pages/Register/Register';


function App() {
  
  return (
    <>
      <Nav name='Rolling Code' />

      <Routes>

        <Route exact path='/' element={ <Home /> } />
        
        <Route path='/product-detail/:id' element={ <ProductDetail /> } />
        {/* TODO: Crear rutas de login y registro */}
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/cart' element={<Cart />} />

      </Routes>
      
      
    </>
  );
}

export default App;
