import './TopHome.css';
//import Login from '../../Pages/Login/Login';
//import { useNavigate } from 'react-router-dom';
//import { useState } from 'react';
//import Home from '../../Pages/Home/Home';

function TopHome({data,datas,setShow,lab,setfavState,setclickProd,setvisitFav}){
    //const [loginState,setloginState]=useState({});
    //let navigatee=useNavigate();
    function taketoLogin(){
        //navigatee('/login',true);
            data(true);
            datas(false);
            setfavState(false);
            setclickProd(false);   
        //setloginState("true");     
        }  
    function taketoSignUp(){
        data(false);        
        datas(true);
        setfavState(false);
        setclickProd(false);   
    } 
    function taketoFav(){
        data(false);
        datas(false);
        setfavState(true);
        setclickProd(false);
        setvisitFav(true);
    }

    return(
        <div className='topHome-main'>
            <div className='title'>
                <p className='title-click' onClick={()=>{setShow(true);setclickProd(false)}} style={{color:'skyblue'}}>SHOP</p>
                <p style={{color:'black'}}>LANE</p>
            </div>      
            
             
             
            <div className='right-section-top'>
                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg><div><label><b>Login</b><br/>or Sign Up</label></div>
                    </button>
                    <ul className="dropdown-menu">
                        <li className='drop-hover' onClick={taketoLogin}>Login</li>
                        <li className='drop-hover' onClick={taketoSignUp}>Sign Up</li> 
                        <li className='drop-hover' onClick={taketoFav}>Favorites</li>                         
                    </ul>
                </div>
                <div className='cart-symbol'>
                    <svg className='cart-hover' onClick={()=>setShow(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <span className='lab-span'>{lab}</span>
                </div>
                
                
            </div>             
             
        </div>
       
    )
}
export default TopHome