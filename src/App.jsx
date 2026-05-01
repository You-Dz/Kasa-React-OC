import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Pages/Home/Home'
import Housing from './Pages/Housing/Housing'
import About from './Pages/About/About'
import Error from './Pages/Error/Error'

import './App.scss'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element = {<Home/>} />
          <Route path='/housing/:id' element = {<Housing/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='*' element = {<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
