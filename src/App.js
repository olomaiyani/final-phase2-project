import { Route ,Routes,} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';




function App() {
  return (
    <div >
      <Navbar/>
      <div className='container'>
        <Routes>
          
          <Route  index element={<Home/>}/>
          <Route path="about"element={<About/>}/>
          <Route path="testimonials"element={<Testimonials/>}/>
          <Route path="contact us"element={<Contact/>}/>
        </Routes>

      </div>
    </div>
  );
}

export default App;
