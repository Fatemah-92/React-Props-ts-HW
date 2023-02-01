
import './App.css'

import Nav from './component/Nav'
import Movies from './component/Movies'
import Footer from './component/Footer'


function App() {
  return (
    <div className="App">
      <Nav />
      <Movies movies={}/>
      <Footer />
    </div>
  )
}

export default App
