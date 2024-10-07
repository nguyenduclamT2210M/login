
import './App.css';
import Login from './login/Login'; // Import đúng thành phần Login
import Register from './register/register';

function App() {
  return (
    <div className="App">
      <Login />  {/* Sử dụng thành phần Login */}
      <Register/>
    </div>
  );
}

export default App;
 