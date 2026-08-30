import "./menu.css";

import proPlaceholder from '../public/images/Portrait_Placeholder.png';
import dashboardIcon from '../public/icons/dashboard.svg';
import myprojectIcon from '../public/icons/myproject.svg';
import mytastIcon from '../public/icons/mytask.svg';
import vitaltaskIcon from '../public/icons/vitaltask.svg';
import settingIcon from '../public/icons/setting.svg';
import helpIcon from '../public/icons/help.svg';




const Menu = () => {
    return (
        `<div class="menu-section">
            <img class="profile-image" src="${proPlaceholder}" alt="">
            <div class="menu" >
                <div class="name-email">
                    <div class="name">Sundar Gurung</div>
                    <div class="email">sundargurung360@gmail.com</div>
                </div>
                <div class="menu-ele">
                    <button class="menu-link" ><span class="icon-styling" style="-webkit-mask-image: url(${dashboardIcon}); mask-image: url(${dashboardIcon});"></span> Dashboard</button>
                    <button class="menu-link" ><span class="icon-styling" style="-webkit-mask-image: url(${myprojectIcon}); mask-image: url(${myprojectIcon});"></span> My Project</button>
                    <button class="menu-link" ><span class="icon-styling" style="-webkit-mask-image: url(${mytastIcon}); mask-image: url(${mytastIcon});"></span> My Tasks</button>
                    <button class="menu-link" ><span class="icon-styling" style="-webkit-mask-image: url(${vitaltaskIcon}); mask-image: url(${vitaltaskIcon});"></span> Vital Task</button>
                    <button class="menu-link" ><span class="icon-styling" style="-webkit-mask-image: url(${settingIcon}); mask-image: url(${settingIcon});"></span> Setting</button>
                    <button class="menu-link" ><span class="icon-styling" style="-webkit-mask-image: url(${helpIcon}); mask-image: url(${helpIcon});"></span> Help</button>
                </div>

            </div>
        </div>`)
}

export default Menu;