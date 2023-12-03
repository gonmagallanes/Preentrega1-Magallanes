
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <>
      <div style={{width:'100vw', height:'100vh'}}>
        <NavBar/>
        <ItemListContainer greeting="Bienvenido "/>
        <ItemListContainer greeting="Esta sera la futura NBA Store de Argentina "/>
        <ItemListContainer greeting="Gracias por visitar "/>
      </div>
      
    </>
  )
}

export default App
