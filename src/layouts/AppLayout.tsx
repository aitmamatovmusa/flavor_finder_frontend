import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

function AppLayout() {
  return (
    <div className="flex flex-col overflow-hidden min-h-[100vh]">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
