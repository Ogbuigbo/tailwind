import React, { useEffect, useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { UseStateVal } from './StateProvider';
import { Link } from 'react-router-dom';

function Navbar() {


    const [{basket}, dispatch] = UseStateVal();
    const [toggleMenu, setToggleMenu]  = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const toggleNav =() =>{
        setToggleMenu(!toggleMenu)
    }

    useEffect(()=>{

        const changeWidth =() =>{
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () =>{
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


  return (
    <div className='navbar'>
        <div className='container'>
            <div>
            <button onClick={toggleNav} className='btn'>
                {toggleMenu ? <CloseIcon fontSize='large'/>  : <MenuIcon fontSize='large'/>}
                </button> 
            </div>

        <div className='middle'>

                <Link to='/' className='middle__logo'>
                <img className='logo' src='https://obiwezy.com/media/logo/stores/3/HEADER_LOGO_EDIT_MARCH_2021.png' alt='product-logo' />
                </Link>

            {(toggleMenu || screenWidth > 700) && (
                    <ul className='list'>
                        <li className='items'>January deal</li>
                        <li className='items'>Best Seller</li>
                        <li className='items'>Shop All</li>
                        <li className='items'>Swap</li>
                        <li className='items'>Pick-up Centers</li>
                        <li className='items'>Help</li>
                    </ul>
            )}
            
            
        </div>

        <div className='left'>
        
        <SearchOutlinedIcon fontSize='large' />
        {(toggleMenu || screenWidth > 700) &&(
        <FavoriteBorderOutlinedIcon fontSize='large'/>
        )}
        
        <Link to='checkout'>
        <div className='basket__counter-option'>
        <ShoppingBasketOutlinedIcon fontSize='large' /> 
        <span className='basket__counter'>{basket?.length||0}
        </span>
        </div>
        </Link>
        </div>

        </div>
    </div>
  )
}

export default Navbar