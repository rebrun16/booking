import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";

const  App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;


// const App = () => {
//   return (
//     <div className="app">
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/hotels" element={<List/>}/>
//         <Route path="/hotels/:id" element={<Hotel/>}/>
//         <Route path="/login" element={<Login/>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;

