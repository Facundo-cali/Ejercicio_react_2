import './App.css';
// import Clock from './components/component_class';
import { ClockFunction } from './components/component_function';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Reloj en componente de clase: */}
        {/* <Clock></Clock> */}


        {/* Reloj en componente funcional */}
        <ClockFunction></ClockFunction>
      </header>
    </div>
  );
}

export default App;
