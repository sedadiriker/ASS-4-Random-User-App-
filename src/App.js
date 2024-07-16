import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <Home/>  
      <ToastContainer />  
    </div>
  );
}

export default App;
