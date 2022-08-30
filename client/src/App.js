import logo from './logo.svg';
import './App.css';
//components
import './component/account/Login.jsx'; 
import Login from './component/account/Login.jsx';

function App() {
  return (
    //kind of like displaying the function or even calling it . 
    <div className="App" style = {{ marginTop: 80, }}>
      <Login/>  
      
    </div>
  );
}

export default App;
