import './MiddleHome.css';

function MiddleHome({setShow,setloginState,setsignupState,setfavState,cart,setvisitAll,setclickProd,fav}){
  
    return(
        <div className='middlehome'>
            <ul className='sections'>
                <li onClick={()=>{
                    //console.log(cart);
                    setvisitAll(true);
                    localStorage.setItem('cartData',JSON.stringify(cart));
                    localStorage.setItem('favData',JSON.stringify(fav));
                    setShow(true);
                    setfavState(false);
                    setloginState(false);
                    setsignupState(false); 
                    setclickProd(false);                
                    }} className='fw-bold'>All</li>
                <li className='fw-bold'>Electronics</li>
                <li className='fw-bold'>Jewelery</li>
                <li className='fw-bold'>Men's Clothing</li>
                <li className='fw-bold'>Women's Clothing</li>
            </ul>
        </div>

    )
}
export default MiddleHome;
