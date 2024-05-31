import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import View from './Components/View/View';
import Edit from './Components/Edit/Edit';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view' element={<View/>} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
