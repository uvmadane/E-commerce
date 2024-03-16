
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import img2 from './Components/Assets/2.jpg'
import Register from './Pages/Register';
import Login from './Pages/Login';
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={img2} category="Category A"/>}/>
      <Route path='/womens' element={<ShopCategory banner={img2} category="Category C"/>}/>
      <Route path='/kids' element={<ShopCategory banner={img2} category="Category B"/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/register' element={<Register/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
