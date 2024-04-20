import CreateWorkout from "./pages/createWorkout/CreateWorkout";
import Updateworkout from "./pages/updateWorkout/Updateworkout";
import Home from "./pages/home/Home";
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/createWorkout" element={<CreateWorkout/>}/>
      <Route path="/updateWorkout" element={<Updateworkout/>}/>
      </Routes> 
    </div>
  );
}

export default App;
