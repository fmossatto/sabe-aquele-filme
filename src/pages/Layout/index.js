import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
