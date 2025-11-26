import './Logo.scss';
import logo from '../assets/images/logo.png'

import CustomButton from '../components/CustomButton'

const Login = () => {
    return (
        <div className="login-container">
            <img src="{logo}" alt="logo" />

            <div className="button-container">
                <CustomButtom>Enter</CustomButtom>
            </div>   

        </div>
    )
}

export default Login;