import './styles/App.css';
import { Outlet } from 'react-router';

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash

  return (
    <div className="App" URL="">
      <Outlet></Outlet>
    </div>
  );
}

export default App;