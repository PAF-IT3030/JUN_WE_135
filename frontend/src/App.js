import CreateWorkout from "./pages/createWorkout/CreateWorkout";
import Home from "./pages/home/Home";
import {Routes,Route} from "react-router-dom";
import AddComment from "./pages/AddComment/AddComment";
import CreateComment from "./pages/CreateComment/CreateComment";
import ViewComment from "./pages/ViewComment/ViewComment";
import Notification from "./pages/Notification/Notification";
import EditComment from "./pages/EditComment/EditComment";
import AddPost from "./pages/AddPost/AddPost";
import UpdatePost from "./pages/UpdatePost/UpdatePost";



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
      <Route path="/EditComment" element={<EditComment/>}/>
      <Route path="/AddPost" element={<AddPost/>}/>
      <Route path="/UpdatePost" element={<UpdatePost/>}/>
      </Routes> 
    </div>
  );
}

export default App;
