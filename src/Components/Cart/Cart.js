import './Cart.css';
import { useEffect, useState } from 'react';
function Cart({cart,setCart,setLab,lab,handleChange}){
    
    const[price,setPrice]=useState(0);
    function handleRemove(id){
        const arrr=cart.filter((item)=>item.id!==id);
        setCart(arrr);
        setLab(()=>lab-1);
        //handlePrice();
    }
    const handlePrice=()=>{
        let ans=0;
        cart.map((item)=>{
            ans+=item.price * item.amount;
        })
        setPrice(ans);
    }
    useEffect(()=>{
        handlePrice();
    })
    return(
        <div className='cart-total'>
            <div className='cart-items'>
            {
            
                cart.map((item,index)=>
                <div className='cart-box'>
                <div>
                    <img className='cart-image' src={item.image} alt='prod-img'></img>
                </div>
                <div className='right-cart'>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <h5>Price :</h5>
                    <div className='modify-num'>
                        <h6>{item.price}</h6>
                        <div>
                            <button onClick={()=>handleChange(item,+1)} >+</button>
                            <label>{item.amount}</label>
                            <button onClick={()=>handleChange(item,-1)}>-</button>
                        </div>
                        <h4></h4>
                        <svg className='remove-btn' onClick={()=>handleRemove(item.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                        {/* <button className='remove-btn' onClick={()=>handleRemove(item.id)}>Remove</button> */}

                    </div>                
                </div> 
                
                
                </div>)
            
                }
            </div>
            <div className='total-price'>
                <div className="card" style={{width:"18rem"}}>                
                    <div className="card-body">
                        <h5 className="card-title">Order Summary</h5>
                        <p className="card-text">Subtotal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${price}</p>
                        <p className="card-text">Shipping Estimate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$5</p>
                        <p className="card-text">Tax Estimate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$5</p> 
                        <h6 className="card-title">Order Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${price+10}</h6>                       
                    </div>
                </div>                
            </div>
    </div>
    )
}
export default Cart;