import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Signup from './page/Signup'
import Login from './page/Login'
import { Navbar } from './components/Navbar'
import BookDetails from './page/BookDetails'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books/:bookId" element={<BookDetails/>}/>
      </Routes>
    </>
  )
}

export default App
