import {BrowserRouter, Route, Routes} from 'react-router-dom'
import InitialPage from './components/initialPage/InitialPage'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage />} />
        
      </Routes>
   </BrowserRouter>
  </>;
}

export default App;
