import './nav.css';
import { format } from 'date-fns';

const currentDate = new Date();

const Nav = () => {
    return (
        `<div class="nav-container">
            <div class="logo"><span>TO</span>-DO</div>
            <div class="search">
                <input class="search-input" type="search" placeholder="Search your task here...">
                <button class="search-btn"></button>
            </div>

            <div >
                <div >${format(currentDate, "EEEE")}</div>
                <div class="date">${format(currentDate, "dd/MM/yyyy")}</div>
            </div>
        </div>`)
};

export default Nav;