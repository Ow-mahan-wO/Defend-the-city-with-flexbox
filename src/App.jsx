import {BrowserRouter, Route, Routes} from 'react-router-dom'
import InitialPage from './pages/InitialPage'
import Level1 from './pages/Level1';
import Level2 from './pages/Level2';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage />} />
        <Route path='/Level1' element={<Level1/>} />
        <Route path='/Level2' element={<Level2/>} />
      </Routes>
   </BrowserRouter>
  </>;
}

export default App;
