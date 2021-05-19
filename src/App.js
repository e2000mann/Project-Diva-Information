import logo from './logo.svg';
import './App.css';

function Welcome(data){
  return <a href="/{data.topic}">{data.topic}</a>
}

function App() {
  return ( 
    <div className = "App">
    <header>
    Project Diva
    </header>
    <Welcome topic="Songs"/>
    <Welcome topic="Modules"/>
    <Welcome topic="Games"/>
    </div>
  );
}

export default App;
