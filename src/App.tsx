import { Route, Routes } from 'react-router-dom';
import { paths } from './router';
import Home from './pages/Home';
import AppLayout from './layouts/AppLayout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Routes>
      <Route path={paths.signUp} element={<SignUp />} />
      <Route path={paths.signIn} element={<SignIn />} />
      <Route element={<AppLayout />}>
        <Route path={paths.home} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
