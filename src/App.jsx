import './App.css'
import BigPost from './components/BigPost'
import BlogCards from './components/BlogCards'
import BlogSlider from './components/BlogSlider'
import Footer from './components/Footer'
function App() {

  return (
    <div className='app'>
      <BlogSlider/>
      <BlogCards/>
      <BigPost/>
      <Footer/>
    </div>
    
  )
}

export default App
