// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as  Routes, Route, Link} from "react-router-dom";


import ListsL from "./components/ListsL";
import DetailPost from "./components/DetailPost";
import List_component from "./components/List_component";
import ContextSetter from "./components/ContextSetter";
import UseStateExample from "./components/UseStateExample";



function App() {
  return (
    <div className="App">
        <nav>
            <ul>
                <li>
                    <Link to ={"/"}>Home</Link>

                </li>
                <li>
                    <Link to ={"/ListsL"}>Semester</Link>

                </li>
                <li>
                    <Link to ={"/"}>Course</Link>

                </li>
                <li>
                    <Link to ={"/"}>Class</Link>

                </li>
                <li>
                    <Link to ={"/"}>Lecturer</Link>

                </li>
                <li>
                    <Link to ={"/"}>Student</Link>

                </li>
                <li>
                    <Link to ={"/fragment"}>Fragment</Link>

                </li>
                <li>
                    <Link to ={"/contextsetter/"}>Context Setter</Link>

                </li>
                <li>
                    <Link to ={"/counter/"}>Counter</Link>

                </li>
            </ul>

        </nav>
      <Routes>
          <Route path={'/'} element={<ListsL/>}/>
          <Route path={'/postdetail/'} element={<DetailPost/>}/>
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <Route path={'/fragment/'} element={<List_component />}/>
          <Route path={'/contextsetter/'} element={<ContextSetter />}/>
          <Route path={'/counter/'} element={<UseStateExample />}/>
          {/*<Route path ={'form/'} element={<Form />}/>*/}

      </Routes>

    </div>
  );
}

export default App;
