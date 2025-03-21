import { NavLink, Outlet } from "react-router-dom";

function Layout()
{
    return(
        <div>
            <ul>
                <li><NavLink to='/' className="my">Home</NavLink></li>
                <li><NavLink to='/about' className="my">About</NavLink></li>
                <li><NavLink to='/artical' className="my">Artical</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    )
}
export default Layout;