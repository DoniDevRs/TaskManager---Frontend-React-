import SideBar from "./components/SideBar";
import Tasks from "./components/Tasks";

import "./App.scss"

const App = () => {
    return (
        <div className="app-container">
        <SideBar />
        <Tasks />
        </div>
    );
};

export default App;