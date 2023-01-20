import './MiddleHome.css';

function MiddleHome({setShow,setloginState,setsignupState,setfavState}){
  
    return(
        <div className='middlehome'>
            <ul className='sections'>
                <li onClick={()=>{setShow(true);setfavState(false);setloginState(false);setsignupState(false);}} className='fw-bold'>All</li>
                <li className='fw-bold'>Electronics</li>
                <li className='fw-bold'>Jewelery</li>
                <li className='fw-bold'>Men's Clothing</li>
                <li className='fw-bold'>Women's Clothing</li>
            </ul>
        </div>

    )
}
export default MiddleHome;
