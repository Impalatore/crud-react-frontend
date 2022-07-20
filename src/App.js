import "./App.css";
import AddEmpleado from "./components/AddEmpleado";
import AddProducto from "./components/AddProducto";
import Navbar from "./components/Navbar";

function App() {
  return(
  <>
    <Navbar />
    <AddEmpleado/>
    <AddProducto/>
  </>
  );
}

export default App;
