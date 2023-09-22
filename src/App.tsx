import { Route, Routes } from 'react-router-dom';
import { paths } from './router';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import AppLayout from './layouts/AppLayout';

function App() {
  return (
    <Routes>
      <Route path={paths.signUp} element={<SignUp />} />
      <Route element={<AppLayout />}>
        <Route path={paths.home} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
