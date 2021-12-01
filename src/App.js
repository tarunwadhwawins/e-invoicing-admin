// import logo from './logo.svg';
import './App.css';
import './assets/scss/app.scss';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter , Switch,Route} from 'react-router-dom'
import Routes from './routes/routes'
// import Signin from './views/signin/Signin'
// import Home from './views/home/Home';
import ProfileSetup from './layout/dashboard/DashboardLayout';
import Login from './views/signin/Signin'
import Dashboard from './layout/dashboard/DashboardLayout';



function App() {
  return (
   <BrowserRouter>
   <Routes/>
   </BrowserRouter>
  );
}

export default App;
