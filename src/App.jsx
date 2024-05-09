import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';


function App() {


  return (
    <div>
    {/*intro section */}
      <div className='myBg '>
        <NavigationBar />
        <Intro />
      </div>
    {/*end of section */}
    <div className='trending'>
      <Trending />
    </div>
    <div className='superhero'>
    <Superhero />
    </div>
    </div>
  )
}

export default App
