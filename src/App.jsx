import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import AddTask from "./pages/AddTask"
import TaskList from "./pages/TaskList"
import "./App.css";


function App() {


  return (
    <BrowserRouter>
    <nav>
      <NavLink to="/">Lista Task</NavLink>
      <NavLink to="/add">Aggiungi Task</NavLink>
    </nav>
      <Routes>
        <Route path="/" element={<TaskList/>} />
        <Route path="/add" element={<AddTask/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
