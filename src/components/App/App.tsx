import "./App.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import TaskArea from "../TaskArea/TaskArea";

const App: React.FC = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="wrapper overflow-hidden">
          <Header />
          <TaskArea />
        </div>
      </div>
    </>
  );
};

export default App;
