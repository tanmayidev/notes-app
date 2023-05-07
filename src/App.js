import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";

function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
      <CreateNote />
    </div>
  );
}

export default App;
