import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;