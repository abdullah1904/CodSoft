import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo"
import Completed from './Components/Completed'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const appName = "Task Manager Application";
  return (
    <Router>
      <Navbar name={appName}/>
      <Routes>
        <Route path="todo" element={<Todo></Todo>}/>
        <Route path="completed" element={<Completed></Completed>}/>
      </Routes>
    </Router>
  );
}

export default App;
