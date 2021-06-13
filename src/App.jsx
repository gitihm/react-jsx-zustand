import "./App.css";
import { UserStore, ProjectStore } from "./stores";
import Item from "./Item";
function App() {
  const { user, setUser } = UserStore();
  const { project, setProject } = ProjectStore();
  return (
    <div className="App">
      <header className="App-header">
        <div>{user}</div>
        <input
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <div>{project}</div>
        <input
          onChange={(e) => {
            setProject(e.target.value);
          }}
        />
        <Item />
      </header>
    </div>
  );
}

export default App;
