import accountIcon from './account.svg'
import './accountbtn.css'

const AccountBtn = () => {
    return (  
        <button className="account-button">
            <img src={accountIcon} alt="account"/>
        </button>    
    );
}
 
export default AccountBtn;