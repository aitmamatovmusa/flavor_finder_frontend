import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { paths } from './router';
import Home from './pages/Home';
import Registration from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col overflow-hidden min-h-[100vh]">
        <Header />
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.register} element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
