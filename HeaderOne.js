import React from 'react';
import './HeaderOne.css';
import LocationOnIcon  from '@material-ui/icons/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { UseStateVal } from './StateProvider';
import { auth } from './config/fire';



function HeaderOne() {

  const[{user}, dispatch] = UseStateVal();

  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='headerone'>
       <div className='headerone__container'>
            <div className='headerone__title'>
            <LocationOnIcon fontSize='small' />
            <span>Store Locator</span>
            </div>

            <Link to={!user && 'login'} style={{textDecoration:'None'}}>
            <div onClick={handleAuthentication} className='headerone__title'>
              
              <PersonIcon fontSize='small' />
              <span>{!user ? 'My Account' :user.email  }</span>
              
            </div>
            </Link>
       </div>

    </div>
  )
}

export default HeaderOne