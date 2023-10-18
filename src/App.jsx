import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'  
import { OtroEjemplo } from './Components/ClassComponent'
import Estudiante from './Components/Estudiante'

function App() {
  return (
  <>
  <ClassComponent/>
  <FuncComponent/>
  <OtroEjemplo/>
  <Estudiante nombre='Bernardo' localidad='Olavarría'/>
  <Estudiante nombre='Jessica' localidad='Indonesia'/>
  <Estudiante nombre='Emmanuel' localidad='Tailandia'/>
  </>
  )
}

export default App
