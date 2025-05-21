import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import AddTask from "./pages/AddTask"
import TaskList from "./pages/TaskList"
import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";

function App() {


  return (
    <GlobalProvider>
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
    </GlobalProvider>
  )
}

export default App
