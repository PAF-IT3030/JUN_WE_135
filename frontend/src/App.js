import CreateWorkout from "./pages/createWorkout/CreateWorkout";
import Home from "./pages/home/Home";
import {Routes,Route} from "react-router-dom";
import AddComment from "./pages/AddComment/AddComment";
import CreateComment from "./pages/CreateComment/CreateComment";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/createWorkout" element={<CreateWorkout/>}/>
      <Route path="/AddComment" element={<AddComment/>}/>
      <Route path="/CreateComment" element={<CreateComment/>}/>
      </Routes> 
    </div>
  );
}

export default App;
