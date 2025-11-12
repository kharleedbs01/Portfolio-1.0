import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Test from './pages/Test.jsx'

function App() {

  return (
    <main id="app" className="bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </main>
  )
}

export default App

