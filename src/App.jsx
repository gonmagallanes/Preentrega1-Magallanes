
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

import { MainRouter } from './router/MainRouter';



function App() {
  
  

  return (
    <>
      <div style={{width:'100vw', height:'100vh'}}>
        <NavBar/>

        <MainRouter/>
      </div>
      
    </>
  )
}

export default App