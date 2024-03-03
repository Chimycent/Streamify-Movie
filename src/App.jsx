import './App.css'
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePages from './home/HomePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';

function App() {
  return (
    <>
    <Header/>
      <Routes>
      <Route path='/' element={<HomePages />}/>
      <Route path='/singlepage/:id' element={<SinglePage />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
