import Star from '../Star/Star';
import './IndProduct.css';
//import { useState,useEffect } from "react";
//import { StarRating } from '@thumbtack/thumbprint-react';

function IndProduct({data,handlecartclick,handleFavclick,setclickProd,showprodDetail}){
    let modStr;
    let recStr=data.title;
    //console.log(recStr.slice(0,15));
     if(recStr.length>=26){
        modStr=recStr.slice(0,26).concat('...');

     }
     else{
        modStr=recStr;
     }
    // const[allProd, setallProd]=useState(null);
    // const[favArr,setfavArr]=useState([]);
    // useEffect(()=>{fetch('https://fakestoreapi.com/products')
    //         .then(result=>result.json())
    //         .then(result=>setallProd(result))});
     
    // function heartClicked(e) {        
    //     const getpara=e.parentNode.nextSibling;        
    //     let getid=parseInt(getpara.id);
    //     for(let each of allProd){
    //         if(each.id===getid){
    //             console.log('done');
    //             setfavArr((favArr)=>[...favArr,each]);
    //             break;
    //         }
    //         else{continue}
    //     }
    //     console.log(favArr);

    // }
    
    
    return(
        
        
        <div className='cloth-info' > 
                 
                 {/* onClick={(e)=>heartClicked(e.target)} */}
            <div className='heart-icon'>
                <svg onClick={(e)=>handleFavclick(data,e.target)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </div>

            

            <div className='image' onClick={()=>{setclickProd(true);showprodDetail(data);}}>
                <img alt='men cloth' src={data.image}></img>
            </div>

            <p className='para-info' onClick={()=>{setclickProd(true);showprodDetail(data);}}>{modStr}</p>

            <div className='fivestar-num'>
                <Star stars={data.rating.rate} review={data.rating.count}/>
            </div>

            <div className='price'>
                <p><b>$ {data.price}</b></p>
            </div>

            <div className='btn-addtocart'>
                <button onClick={(e)=>{handlecartclick(data,e.target)}} className='add-to-cart'>Add to Cart</button>
            </div>

        </div>
        
    )
}
export default IndProduct;