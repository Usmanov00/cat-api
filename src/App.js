import Header from "./Components/Header";
import {Routes, Route} from "react-router-dom";
import Favorites from "./Components/Favorites";
import Homepage from "./Components/Homepage/Homepage";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
