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
            <div class="menu">
                <div>
                <div class="name-email">
                    <div class="name">Zakaria El</div>
                    <div class="email">zakariaelbarmaki3@gmail.com</div>
                </div>
                <div class="menu-ele" id="menu-btn">
                    <button class="menu-link" id="dashboard"><span class="icon-styling" style="-webkit-mask-image: url(${dashboardIcon}); mask-image: url(${dashboardIcon});"></span> Dashboard</button>
                    <button class="menu-link" id="my-projects" ><span class="icon-styling" style="-webkit-mask-image: url(${myprojectIcon}); mask-image: url(${myprojectIcon});"></span> My Project</button>
                    <button class="menu-link" id="my-tasks"><span class="icon-styling" style="-webkit-mask-image: url(${mytastIcon}); mask-image: url(${mytastIcon});"></span> My Tasks</button>
                    <!-- <button class="menu-link" id="vital-tasks"><span class="icon-styling" style="-webkit-mask-image: url(${vitaltaskIcon}); mask-image: url(${vitaltaskIcon});"></span> Vital Tasks</button>
                    <button class="menu-link" id="setting"><span class="icon-styling" style="-webkit-mask-image: url(${settingIcon}); mask-image: url(${settingIcon});"></span> Setting</button>
                    <button class="menu-link" id="help"><span class="icon-styling" style="-webkit-mask-image: url(${helpIcon}); mask-image: url(${helpIcon});"></span> Help</button> -->
                </div>
                </div>

                <div class="credit-seciton">
                <a href="https://www.figma.com/community/file/1358477027647527963/to-do-list-web-app-design" target="_blank">UI design</a>
                </div>

            </div>
            
        </div>`)
}

export default Menu;