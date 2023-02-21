import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id/:slug' element={<ProductDetails />} />
        <Route path='/profile/cart' element={<Cart />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
