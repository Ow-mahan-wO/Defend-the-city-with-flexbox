import {BrowserRouter, Route, Routes} from 'react-router-dom'
import InitialPage from './components/initialPage/InitialPage'
import Level1 from './components/Levels/Level1/Level1';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage />} />
        <Route path='/Level1' element={<Level1/>} />
      </Routes>
   </BrowserRouter>
  </>;
}

export default App;
