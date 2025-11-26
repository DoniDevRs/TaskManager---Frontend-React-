import './Login.scss';
import logo from '../assets/images/logo.png'

import { useNavigate } from 'react-router-dom';

import CustomButton from '../components/CustomButton'

const Login = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/')

    }

    return (
        <div className="login-container">
            <img src={logo} alt="logo" />

            <div className="button-container">
                <CustomButton onClick={handleSignInClick}>Enter</CustomButton>
            </div>   

        </div>
    )
}

export default Login;