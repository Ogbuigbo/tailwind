import './App.css';
import HeaderOne from './HeaderOne';
import Navbars from './Navbars';
import ImageSlide from './ImageSlide';
import Home from './Home';
import Checkout from './Checkout';
import {Routes, Route} from 'react-router-dom';
import Productlayout from './Productlayout';
import Login from './Login';
import { UseStateVal } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './config/fire';








function App() {

  const[{}, dispatch] = UseStateVal();

  useEffect(()=>{
    

    auth.onAuthStateChanged((authUser)=>{
      console.log('The user is >>>', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else{
        dispatch({
          type:'SET_USER',
          user: null
        });
      }
    })
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<><HeaderOne /><Navbars />
        <ImageSlide />
        <Home />  </>} />

        <Route  path='/login'  element={<><HeaderOne /><Navbars /><Login/></>} />
        <Route onSubmit={(e) => e.preventDefault()} path='/product-layout'  element={<> <HeaderOne /><Navbars /><Productlayout/> </>} />


        <Route onSubmit={(e) => e.preventDefault()}  path='checkout' element={<><HeaderOne /> <Navbars /><Checkout /></>} />
        </Routes>
    </div>
  );
}

export default App;
