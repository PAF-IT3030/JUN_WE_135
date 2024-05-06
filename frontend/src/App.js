import CreateWorkout from "./pages/createWorkout/CreateWorkout";
import Updateworkout from "./pages/updateWorkout/Updateworkout";
import AddWorkout from "./pages/AddWorkout/AddWorkout";
import EditWorkoutPlan from "./pages/EditWorkoutPlan/EditWorkoutPlan";
import Home from "./pages/home/Home";
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/createWorkout" element={<CreateWorkout/>}/>
      <Route path="/updateWorkout" element={<Updateworkout/>}/>
      <Route path="/AddWorkout" element={<AddWorkout/>}/>
      <Route path="/EditWorkoutPlan" element={<EditWorkoutPlan/>}/>
      </Routes> 
    </div>
  );
}

export default App;
