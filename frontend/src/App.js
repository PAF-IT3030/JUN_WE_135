import CreateWorkout from "./pages/createWorkout/CreateWorkout";
import Home from "./pages/home/Home";
import {Routes,Route} from "react-router-dom";
import AddComment from "./pages/AddComment/AddComment";
import CreateComment from "./pages/CreateComment/CreateComment";
import ViewComment from "./pages/ViewComment/ViewComment";
import Notification from "./pages/Notification/Notification";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/createWorkout" element={<CreateWorkout/>}/>
      <Route path="/AddComment" element={<AddComment/>}/>
      <Route path="/CreateComment" element={<CreateComment/>}/>
      <Route path="/ViewComment" element={<ViewComment/>}/>
      <Route path="/Notification" element={<Notification/>}/>
      </Routes> 
    </div>
  );
}

export default App;
