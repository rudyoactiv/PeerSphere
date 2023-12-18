import { Outlet, /*useLocation*/ } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    //const location = useLocation();
    //const isHomePage = location.pathname === '/'; // Assuming '/' is the home page path

    return (
        <div className='App'>
            {<Sidebar />}
            <div className='page'>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
