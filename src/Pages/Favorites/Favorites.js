import './Favorites.css';
function Favorites({fa}){
    return(
        <div className='cloth-info-fav'>                 

            <div className='image'>
                <img alt='men cloth' src={fa.image}></img>
            </div>

            <p className='para-info-fav'>{fa.title}</p>

            <div className='fivestar-num-fav'>

            </div>

            <div className='price-fav'>
                <p>{fa.price}</p>
            </div>

            {/* <div className='btn-addtocart'>
                <button onClick={()=>handlecartclick(data)} className='add-to-cart'>Add to Cart</button>
            </div> */}

        </div>
    )
}
export default Favorites;