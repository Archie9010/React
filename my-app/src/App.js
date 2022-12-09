import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App">
     <StatefulGreetingWithCallback />
    </div>
  );
}

export default App;
