import Login from './components/login';
import Profile from './components/profile';
import AppProvider from './context';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Login />
        <Profile />
      </div>
    </AppProvider>
  );
}

export default App;
