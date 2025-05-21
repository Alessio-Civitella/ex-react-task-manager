import { useContext, usecontext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskList() {

    const {tasks} = useContext(GlobalContext);
    console.log('Tasks:', tasks);
    


  return (
    <div className="task-list-container">
      <h1>Lista delle Task</h1>
      <p>Qui verranno mostrate le Task...</p>
    </div>
  );
}
