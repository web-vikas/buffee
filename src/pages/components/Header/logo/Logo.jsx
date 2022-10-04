import { Link } from 'react-router-dom';
import imageLogo from '../../../assest/images/BuffeeLogo.png'
import './logo.css';
const logo = () =>{
    return(
        <Link to='/'>
        <div className='header__logo'>
            <img src={imageLogo} alt="logo" />
        </div>
        </Link>
    )
}
export default logo;