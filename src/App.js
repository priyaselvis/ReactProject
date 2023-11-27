import './App.css';
import AuthProvider from './context/useContext';
import Routing from './routers/Routing';
// import Signup from './components/Signup';
function App() {
  return (
    <AuthProvider>

    <div className="App">
     <Routing/>
    </div>
    </AuthProvider>
  );
}

export default App;