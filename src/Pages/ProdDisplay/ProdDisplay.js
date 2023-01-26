import './ProdDisplay.css';
import IndProduct from "../../Components/ProductIndividual/IndProduct";
import { useState,useEffect } from "react";


function  ProdDisplay({handlecartclick,handleFavclick,setclickProd,showprodDetail}){
      const sliceIntoChunks = (arr, chunkSize) => {
            for(let j=0;j<arr.length;j++){
                arr[j].amount=1;
            }
            const res = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                
                if(i===18){
                    const chunk = arr.slice(i, i + 2);
                    res.push(chunk);
                }
                else{
                    const chunk = arr.slice(i, i + chunkSize);
                    res.push(chunk);
                }
              
            }
            
            return res;
          };
    
    const[bitData, setbitData]=useState(null);
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        })
            .then(result=>result.json())
            .then(result=>{console.log('Rayaru');setbitData(sliceIntoChunks(result, 3))})
            .catch((error) => {
                console.log(error);})

    },[]);
    

      
    
    

    return(
        <div className="whole"> 
            {bitData &&
               bitData.map((item)=>
            <tr>
                {/* {console.log(item[0].id)} */}
            <td><IndProduct data={item[0]} handlecartclick={handlecartclick} handleFavclick={handleFavclick} setclickProd={setclickProd} showprodDetail={showprodDetail}/></td>
            <td className='second-item'><IndProduct data={item[1]} handlecartclick={handlecartclick} handleFavclick={handleFavclick} setclickProd={setclickProd} showprodDetail={showprodDetail}/></td>
            {item[2] && <td className='third-item'><IndProduct data={item[2]} handlecartclick={handlecartclick} handleFavclick={handleFavclick} setclickProd={setclickProd} showprodDetail={showprodDetail}/></td>            
             }
             </tr>
            )
            } 
        </div>
    )
}
export default ProdDisplay;