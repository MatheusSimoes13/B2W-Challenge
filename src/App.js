import './App.css';
import Home from './pages/Home'
import { FollowingProvider } from './contexts/following'


function App() {

  return (
    <div className="App">
      <FollowingProvider>
        <Home />
      </FollowingProvider>
    </div>
  );
}

export default App;
