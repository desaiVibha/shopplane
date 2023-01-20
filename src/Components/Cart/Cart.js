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
        <div>
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
                    <button className='remove-btn' onClick={()=>handleRemove(item.id)}>Remove</button>

                </div>                
            </div> 
            
            
        </div>)
        
        }
        <div className='total-price'>
            <span>Total price of cart</span>
            <span>$ - {price}</span>
        </div>
        </div>
    )
}
export default Cart;