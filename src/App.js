import AppBar from "./components/AppBar/AppBar";
import BoardBar from "./components/BoadBar/BoardBar";
import BoardContent from "./components/BoardContent/BoardContent";

function App() {
  return (
    <div className="trello-master">
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
      
    </div>
  );
}

export default App;
