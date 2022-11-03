import HeaderContainer from "./Header/HeaderContainer";
import HomeContainer from "./HomeMain/HomeContainer";
import WatchContainer from "./watch/WatchContainer";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import MusicMain from "./Music/MusicMain";
import Postform from "./HomeMain/PostForm/Postform";
function App() {
  return (
    <div className='w-screen h-auto  ' >
      <Postform/>
      <HeaderContainer/>
      <Routes>
          <Route path="/"  element={<HomeContainer/> }  />
        
          <Route path="facebook.com/watch"   element={<WatchContainer/>} />

          <Route path="facebook.com/Music"   element={<MusicMain/>} />


      </Routes>
    </div>
  );
}

export default App;
