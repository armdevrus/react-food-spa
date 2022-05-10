import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Recipe } from './pages/Recipe';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';

function App() {
  return (
    <>
      <Router basename='/react-food-spa'>
        <Header />
        <main className='container content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/meal/:id' element={<Recipe />} />
            <Route path='/category/:name' element={<Category/>}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

