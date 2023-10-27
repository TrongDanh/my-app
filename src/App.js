import {Routes, Route} from 'react-router-dom'
import UserTemPlate from './templates/UserTemPlate/UserTemPlate';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import ManagerMovie from './pages/ManagerMovie/ManagerMovie';
import ManagerAddMovie from './pages/ManagerAddMovie/ManagerAddMovie';

function App() {
  return (
    <>
      <Routes>
        {/* userTemplate */}
        <Route path='/' element={<UserTemPlate/>}>
          <Route index element={<Home/>}/>
        </Route>

        {/* AdminTemplate */}
        <Route path='/admin' element={<AdminTemplate/>}>
          <Route path='manager-movie' element={<ManagerMovie/>} />
          <Route path='manager-add-movie' element={<ManagerAddMovie/>} />
        </Route>
        <Route path='/sign-in' element={<SignIn/>}/>
      </Routes>
    </>
  );
}

export default App;
