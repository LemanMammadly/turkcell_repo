import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './Pages/Dashboard/Home';
import Users from './Pages/Dashboard/Users';
import Contact from './Pages/Dashboard/Contact';
import UserDetail from './Pages/Dashboard/UserDetail';
import Login from './Pages/Auth/Login';
import DashboardLayout from './Layout/Dashboard';
import AuthLayout from './Layout/Auth';
import Register from './Pages/Auth/Register';
import Error404 from './Pages/Error404';

function App() {
  return (
<>
<BrowserRouter>
    <Routes>
        <Route path='/' element={<DashboardLayout/>}>
        <Route index element={<Home />} />
        <Route path='users' element={<Users />} />
        <Route path='users/:id' element={<UserDetail />} />
        <Route path='contact' element={<Contact />} />
        </Route>
        
        <Route path='auth' element={<AuthLayout/>}>
        <Route index element={<Login />} />
        <Route path='register' element={<Register />} />
        </Route>

        <Route path='*' element={<Error404/>} />
    </Routes>
  </BrowserRouter>
  <div>Learn React</div>
</>
  );
}

export default App;
