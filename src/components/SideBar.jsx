import CustomButton from './CustomButton';

import './SideBar.scss'
import logo from '../assets/images/logo.png'

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="react" />

            </div>

            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>

        </div>
    )

}

export default SideBar;