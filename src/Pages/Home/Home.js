import MiddleHome from '../../Components/MiddleHome/MiddleHome';
import TopHome from '../../Components/TopHome/TopHome';
import Login from '../Login/Login';
import { useState } from 'react';
//import IndProduct from '../../Components/ProductIndividual/IndProduct';
import './Home.css';
import SignUp from '../SignUp/SignUp';
import ProdDisplay from '../ProdDisplay/ProdDisplay';
import Cart from '../../Components/Cart/Cart';
import Favorites from '../Favorites/Favorites';
function Home(){  
    const[loginState,setloginState] =useState(false);   
    const[signupState,setsignupState] =useState(false);
    const[favState,setfavState] =useState(false);
    const[show,setShow]=useState(true);
    const[cart,setCart]=useState([]);
    const[lab,setLab]=useState(0);
    const[fav,setFav]=useState([]);
    
    //const[num,setNum]=useState(1);
     //const[numArr,setnumArr]=useState([1]);
    // const[pricee,setPrice]=useState([]);
    // const[totalPrice,settotalPrice]=useState(0);
    // const[dupPrice,setdupPrice]=useState([]);
    // const[idd,setIdd]=useState(0);
    
    // let dupPriceArr=[];
    // let dupNum=[];
    // let lenn;
    // let pushPrice=[];
    
    

    // const[len,setLen]=useState(cart.length);
    // const[visit,setVisit]=useState(false);
    const handlecartclick=(item,e)=>{             
        
        if(cart.indexOf(item)!==-1){alert("This item is been already added to the cart"); return};
        
        setCart(()=>[...cart,item]);    
        setLab(()=>lab+1);  
        e.style.backgroundColor='grey'  ; 
        e.innerText="Added to cart";
              
    }
    // useEffect(()=>{
    //     let r=cart[idd].price;
    //     console.log(r);
    //     setPrice(()=>[...pricee,r]);                 
    
     
     
    // console.log(pricee);

    // },[cart])
    // function handleTotalPrice(){
    //     let sum=0;
    //     for(let k=0;k<dupPrice.length;k++){            
    //         sum=sum+dupPrice[k];
    //     }
    //     settotalPrice(()=>sum);
    // }
     
    
    // function addbyone(id){
    //     dupNum=numArr;
    //     dupPriceArr=dupPrice;        
    //     //console.log(dupPriceArr);
    //     for(let z=0;z<dupNum.length-1;z++){
    //         if(z+1===id){
    //             dupNum[z]=dupNum[z]+1;
    //         }
    //     }
    //     setnumArr(()=>dupNum);
    //     console.log(numArr);
    //     for(let a=0;a<pricee.length-1;a++){
    //         if(a+1===id){
    //             //console.log(price[a]);
    //             //console.log(numArr[a]);
    //             dupPriceArr[a]=pricee[a]*numArr[a];
    //             //console.log(dupPriceArr[a]);
    //         }
    //     }
    //     setdupPrice(()=>dupPriceArr);
    //     console.log(dupPrice);
    //     // setpriceArr(priceArr.map((val,index)=>{if(index===id) val= val*num }))        
    // //    dupArr=priceArr;
    // //     for(let j=0;j<dupArr.length-1;j++) {
    // //         if(j+1===id){
    // //             dupArr[j]=priceArr[j]*numArr[j];
    // //         }
    // //     }
    // //     setpriceArr(()=>dupArr);   
    //     handleTotalPrice();    
    // }
    // if(!show && bool===true){handlecartclick(cart[0]);bool=false}
    const handleChange=(item,d)=>{
        let ind=-1;
        cart.forEach((data,index)=>{
            if(data.id===item.id){
                ind=index;
            }
        });
        const tempArr=cart;
        tempArr[ind].amount+=d;
        if(tempArr[ind].amount===0)
        tempArr[ind].amount=1;
        setCart([...tempArr])



    }
 
    const handleFavclick=(item)=>{
        if(fav.indexOf(item)!==-1){alert("This item is been already added to the Favorites"); return};
        setFav(()=>[...fav,item]);         
    }
    
    return(
        <div className='home-main'>
            
            <div className='home-top'>
                <TopHome data={setloginState} datas={setsignupState} setShow={setShow} lab={lab} setfavState={setfavState}  />
            </div>
            <hr style={{margin:"10px 220px 0 220px",color:"grey"}}></hr>

            <div className='home-middle'>
                <MiddleHome setShow={setShow} setloginState={setloginState} setsignupState={setsignupState} setfavState={setfavState}/>
            </div>
            <hr style={{margin:"10px 220px 0 220px",color:"grey"}}></hr>

            <div className='home-bottom'>
              {(!loginState && !signupState && show && !favState ) && <ProdDisplay handlecartclick={handlecartclick} handleFavclick={handleFavclick}/>} 
              {loginState && <Login setloginState={setloginState} setsignupState={setsignupState} />}                
              {signupState && <SignUp setloginState={setloginState} setsignupState={setsignupState}/>}
              {/* {!show && 
              cart.map((val,index)=> {  
                return( 
                    index+1===cart.length?<> <Cart cart={val} setCart={setCart} handleRemove={handleRemove} addbyone={addbyone} subone={subone} dupPrice={dupPrice[index]} num={numArr[index]}  /><p>Price:</p><p>{totalPrice}</p></>:      
                
                <Cart cart={val} setCart={setCart} handleRemove={handleRemove} addbyone={addbyone} subone={subone} dupPrice={dupPrice[index]} num={numArr[index]}/>
              )
                }
              )                          
              } */}
              {
                !show && <Cart cart={cart} setCart={setCart} setLab={setLab} lab={lab} handleChange={handleChange}/>
              }
              {favState &&
              fav.map((val)=>               
                    <Favorites fa={val}/>                  
                    )
               }        
              
                    

            </div>

        </div>
    )
}
export default Home