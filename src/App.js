import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
        <h1> Hi Lei</h1>

            <ul>
                <li>
                    <Link to ={"/home"}>Home</Link>

                </li>
               <li>
                    <Link to ={"/login/"}>Login</Link>

                </li>
            </ul>



        <Routes>

          <Route path ={'/home/'} element={<Home/>}/>
          <Route path ={'/login/'} element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
