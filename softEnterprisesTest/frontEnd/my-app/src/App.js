import LogIn from './components/logIn';
import AddProduct from './components/addProduct';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' exact Component={LogIn} />

          <Route path='/addProduct' exact Component={AddProduct} />


        </Routes>
      </Router>
  </div>
  );
}

export default App;
