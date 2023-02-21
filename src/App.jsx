import './App.css';
import Header from './components/Header';
import TodosLogic from './components/TodosLogic';

const App = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  </div>
);
export default App;
